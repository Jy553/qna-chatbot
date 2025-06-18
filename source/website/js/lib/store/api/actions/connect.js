
module.exports = {
    getContactFlow(context, opts) {
        return context.dispatch('_request', {
            url: context.rootState.info._links.connect.href,
            method: 'get',
        });
    },
};
