

const Vuex = require('vuex');

module.exports = {
    namespaced: true,
    state: {
        loading: false,
    },
    mutations: {
        loading(state, val) {
            state.loading = val;
        },
    },
    getters: {},
    actions: require('./actions'),
};
