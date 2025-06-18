

process.argv.push('--debug');
const { run } = require('../util/temp-test');

module.exports = {
    info: (test) => run(`${__dirname}/` + 'info', {}, test),
};
