


const _ = require('lodash');
const qnabot = require('qnabot/logging');

const excludedKeys = ['FirstSeen', 'LastSeen'];
function processKeysForRedact(obj, fullRedaction = false) {
    Object.keys(obj).forEach((key) => {
        const val = obj[key];
        if (excludedKeys.includes(key)) {
            return;
        }
        if (_.isPlainObject(val)) {
            processKeysForRedact(val, fullRedaction);
        }
        else if (Array.isArray(val)) {
            val.forEach(item => {
                if (_.isPlainObject(item)) {
                    processKeysForRedact(item, fullRedaction);
                }
            });
        }
        else if (key.includes('token')) {
            obj[key] = '<token redacted>';
        }
        else if (fullRedaction && typeof val === 'string') {
            obj[key] = qnabot.redact_text(val);
        }
    });
}
exports.processKeysForRedact = processKeysForRedact;
