

module.exports = {

    startKendraIndexing(context, opts) {
        return context.dispatch('_request', {
            url: `${context.rootState.info._links.crawler.href}/start?message=start&topic=${context.rootState.info.KendraCrawlerSnsTopic}`,
            method: 'post',
        });
    },
    // point to new Kendra Lambda instead of the old one
    startKendraV2Indexing(context, opts) {
        return context.dispatch('_request', {
            url: context.rootState.info._links.crawlerV2.href,
            method: 'post',
        });
    },
    getKendraIndexingStatus(context, opts) {
        return context.dispatch('_request', {
            url: context.rootState.info._links.crawlerV2.href,
            method: 'get',
        });
    },
};
