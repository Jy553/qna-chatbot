
const _ = require('lodash');
const query = require('query-string');
const jwt = require('jsonwebtoken');

module.exports = {
    credentials(state, payload) {
        state.loggedin = true;
        state.credentials = payload;
    },
    login(state) {
        state.loggedIn = true;
    },
    setId(state, Id) {
        state.Id = Id;
    },
};
