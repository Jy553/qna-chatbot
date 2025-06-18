

const Vuex = require('vuex');

module.exports = {
    namespaced: true,
    state: {
        loggedin: false,
    },
    mutations: require('./mutations'),
    getters: require('./getters'),
    actions: require('./actions'),
};
