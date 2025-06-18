

const resource = require('../util/resource');
const mock = require('../util/mock');

module.exports = {
    Services: resource('services'),
    ServicesGet: mock({
        auth: 'AWS_IAM',
        method: 'GET',
        subTemplate: 'services/info',
        resource: { Ref: 'Services' },
    }),
};
