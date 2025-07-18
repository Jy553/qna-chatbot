

process.argv.push('--debug');
const { run } = require('../util/temp-test');

module.exports = {
    health: {
        get: (test) => run(`${__dirname}/` + 'health', {}, test),
        resp: (test) => run(`${__dirname}/` + 'health.resp', {}, test),
    },
};
