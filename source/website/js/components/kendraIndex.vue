<!-- eslint-disable max-len -->

<template lang="pug">
v-container#page-import
    v-col
      v-card
        v-card-title.text-h4.pa-6 Kendra Web Crawling
        v-card-text.pb-0.pl-6.pr-6
          h3 For more information about Kendra Web Crawling, see <!-- NOSONAR-start --><!-- This link is safe --><a href="https://github.com/aws-solutions/qnabot-on-aws/blob/main/source/docs/kendra_crawler_guide/README.md" target="_blank">here</a><!-- NOSONAR-end -->
        v-card-text(v-if="!kendraIndexerEnabled").pa-6
          h4 To Enable Kendra Web Crawling, following configuration is required.
          br
          p KendraWebPageIndexId parameter in CloudFormation stack should be set to the ID of the Kendra Index used to store the content of the web pages
          p Also the following settings should be configured from QnABot Designer -
          p
          p ENABLE_KENDRA_WEB_INDEXER - should be set to true
          p KENDRA_INDEXER_URLS - a comma separated list of web pages to index
        v-card-actions.pa-6.pb-2
            v-row.pa-6.pb-0
                v-btn#btnKendraStartIndex(
                    :disabled="status == 'STARTING' || status == 'CREATING' || status == 'UPDATING' || status == 'DELETING' || status == 'SYNCING' || status =='SYNCING_INDEXING' || status == 'STOPPING' || !kendraIndexerEnabled",
                    variant="tonal"
                    @click="start"
                ) Start Crawling
                v-card-text.pt-2(v-if="kendraIndexerEnabled == true")
                    p Current Status: {{ status }}
        v-col(v-if="history && history.length > 0")
          v-card-title Kendra Crawling History
          v-card-text
            h3 <a :href="dashboard_url" target="_blank">View Web Crawling Errors in CloudWatch </a>
        v-card-text
            v-table
                thead
                    tr(style="text-align: left")
                        th(style="text-align: left") Start Time
                        th(style="text-align: left") End Time
                        th(style="text-align: left") Status
                        th(style="text-align: left") Error Message
                        th(style="text-align: left") Documents Scanned
                        th(style="text-align: left") Documents Added
                        th(style="text-align: left") Documents Modified
                        th(style="text-align: left") Documents Deleted
                        th(style="text-align: left") Documents Failed
                tbody
                    tr(
                        v-for="(job,index) in history"
                        :key="index"
                    )
                        td {{ convertToLocalTime(job.StartTime) }}
                        td {{ convertToLocalTime(job.EndTime) }}
                        td {{ job.Status }}
                        td {{ job.ErrorMessage }}
                        td {{ job.Metrics.DocumentsScanned }}
                        td {{ job.Metrics.DocumentsAdded }}
                        td {{ job.Metrics.DocumentsModified }}
                        td {{ job.Metrics.DocumentsDeleted }}
                        td {{ job.Metrics.DocumentsFailed }}
</template>

<script>

const Vuex = require('vuex');
const _ = require('lodash');

module.exports = {
    data() {
        return {
            status: '',
            dashboard_url: '',
            history: {},
            dialog: false,
            text: false,
            ready: false,
            kendraIndexerEnabled: false,
            lastStatusCheck: Date.now(),
            intervalBetweenPoll: 10000,
            isPolling: 0,
        };
    },
    components: {},
    computed: {},
    updated() {
        console.log('updated');
        const self = this;
        if (!self.kendraIndexerEnabled) {
            self.IsKendraEnabled().then((data) => {
                self.kendraIndexerEnabled = data;
            });
        }
        this.poll(
            () => {
                console.log(`last status check ${self.lastStatusCheck}`);
                if (!self.lastStatusCheck || (Date.now() - self.lastStatusCheck > self.intervalBetweenPoll)) {
                    self.lastStatusCheck = Date.now();
                    console.log('getting status');  
                    self.getKendraIndexingStatus().then((data) => {
                    if (self.status == 'SUCCEEDED' && data.Error && data.Error.toLowerCase().includes('not found')) {
                        // Most likely caused by Kendra Throttling error, don't change the current status
                        self.intervalBetweenPoll = 20000;
                        return;
                    }
                    self.dashboard_url = data.DashboardUrl;
                    self.status = data.Status;
                    self.history = data.History;
                    self.intervalBetweenPoll = 10000;
                    });
                }
                // if the Kendra Start Index isn't displayed -- stop syncing
                const shouldNotPoll = document.getElementById('btnKendraStartIndex')?.disabled ? false : true;

                console.log(`Should not poll ${shouldNotPoll}`);
                return shouldNotPoll;
            },
            600000,
            10000,
        ).catch((error) => console.log(`Error trying to retrieve status ${error}`));
    },
    mounted() {
        console.log('updated');
        const self = this;
        self.getKendraIndexingStatus().then((data) => {
            self.status = data.Status;
            self.history = data.History;
            console.log(`History ${JSON.stringify(self.history)}`);
            self.lastStatusCheck = Date.now();
        });
        self.$forceUpdate();
    },
    methods: {
        async start() {
            this.$store
                .dispatch('api/startKendraV2Indexing')
                .catch((err) => console.log(`error while trying to start indexing ${err}`));
            this.status = 'STARTING';
            await new Promise((r) => setTimeout(r, 3000));
            this.getKendraIndexingStatus().then((data) => {
                this.status = data.Status;
            });
            this.$forceUpdate();
        },

        async getKendraIndexingStatus() {
            const result = await this.$store.dispatch('api/getKendraIndexingStatus');
            return result;
        },
        convertToLocalTime(isoDateTime) {
            if (isoDateTime == '') {
                return '';
            }
            isoDateTime = new Date(isoDateTime);
            return (
                `${isoDateTime.toLocaleDateString()
                } ${
                    isoDateTime.toLocaleTimeString()}`
            );
        },

        async IsKendraEnabled() {
            const settings = await this.$store.dispatch('api/listSettings');
            const privateSettings = await this.$store.dispatch('api/listPrivateSettings');
            console.log(JSON.stringify(settings));
            return _.get(settings[2], 'ENABLE_KENDRA_WEB_INDEXER') === 'true' && _.get(settings[2], 'KENDRA_INDEXER_URLS') !== ''
        && _.get(privateSettings, 'KENDRA_WEB_PAGE_INDEX', '') !== '';
        },

        poll(fn, timeout, interval) {
            interval = interval || 100;
            const endTime = Number(new Date()) + timeout;

            const checkCondition = function (resolve, reject) {
                // If the condition is met, we're done!
                const result = fn();
                if (result) {
                    resolve(result);
                }
                // If the condition isn't met but the timeout hasn't elapsed, go again
                else if (Number(new Date()) < endTime) { 
                    setTimeout(() => checkCondition(resolve, reject), interval);
                }
                // Didn't match and too much time, reject!
                else {
                    reject(new Error(`the polling operation has either timed out or exited`));
                }
            };

            return new Promise(checkCondition);
        },
    },
};
</script>

<!-- NOSONAR-start -->
<!-- Allows for customer to add custom style. -->
<style lang='scss' scoped>
</style>
<!-- NOSONAR-end -->
