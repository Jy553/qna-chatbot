

const lib = require('./lib');

exports.handler = function (event, context, callback) {
    console.log('Event:', JSON.stringify(event, null, 2));

    return lib(event).then(() => callback(null, 'success'))
        .catch(callback);
};
