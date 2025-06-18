
<template lang='pug'>
v-card
    v-progress-linear(indeterminate)
</template>

<script>

require('vuex');

module.exports = {
    data() {
        return {};
    },
    components: {
    },
    created() {
        const self = this;
        this.$store.dispatch('bootstrap')
            .then(() => self.$store.dispatch('user/login'))
            .then(() => self.$router.replace('/edit'))
            .catch((error) => {
                console.log(error);
                self.$router.replace('/error');
            });
    },
    methods: {
    },
};
</script>
