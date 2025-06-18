

const _ = require('lodash');
const qnabot = require('qnabot/logging');

module.exports = async function cache(req, res) {
    qnabot.log('Entering Cache Middleware');
    qnabot.debug(`response:${JSON.stringify(res)}`);
    if (_.has(res, 'out.response')) {
        res.out.sessionAttributes.cachedOutput = res.out.response;
    }
    qnabot.debug(`edited response:${JSON.stringify(res)}`);
    return { req, res };
};
