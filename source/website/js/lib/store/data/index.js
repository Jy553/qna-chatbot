

const Vuex = require('vuex');

module.exports = {
    namespaced: true,
    state: {
        QAs: [],
        schema: {},
        filter: '',
        loading: false,
    },
    mutations: require('./mutations'),
    getters: require('./getters'),
    actions: require('./actions'),
};
