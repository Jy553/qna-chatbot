

const Vuex = require('vuex');

module.exports = {
    namespaced: true,
    state: {
        loaded: 0,
        mode: 'questions',
        current: 0,
        perpage: 15,
        total: 0,
    },
    mutations: require('./mutations'),
    getters: require('./getters'),
    actions: require('./actions'),
};
