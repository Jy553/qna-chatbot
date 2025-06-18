
const osWarmer = new (require('./lib'))();

exports.warmer = async function (event, context, callback) {
    await osWarmer.perform(event, context, callback);
    return 'complete';
};