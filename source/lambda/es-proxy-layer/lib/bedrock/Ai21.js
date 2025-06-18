

const _ = require('lodash');
const { BedrockModelProviderPrototype } = require('./BedrockModelProviderPrototype');

class Ai21 extends BedrockModelProviderPrototype {
    constructor() {
        super();
        this.body = _.cloneDeep({
            maxTokens: 200,
            temperature: 0,
            topP: 1,
            stopSequences: [],
            countPenalty: {
                scale: 0,
            },
            presencePenalty: {
                scale: 0,
            },
            frequencyPenalty: {
                scale: 0,
            },
        });
    }

    getResponseBody(response) {
        const body = this.parseResponseBody(response);
        return body.completions[0].data.text;
    }
}
exports.Ai21 = Ai21;
