
module.exports = {
    getGenesysCallFlow(context, opts) {
        return context.dispatch('_request', {
            url: context.rootState.info._links.genesys.href,
            method: 'get',
        });
    },
};
