

const validator = new (require('jsonschema').Validator)();
const axios = require('axios');
const util = require('./util');

module.exports = Object.assign(
    require('./get'),
    require('./delete'),
    require('./up-download'),
    require('./add'),
);
