

const { BedrockModelProviderPrototype } = require('./BedrockModelProviderPrototype');

class AmazonEmbeddings extends BedrockModelProviderPrototype {
    constructor() {
        super();
        this.body = {};
    }

    setPrompt(prompt) {
        this.body.inputText = prompt;
    }

    getResponseBody(response) {
        return this.parseResponseBody(response).embedding;
    }
}
exports.AmazonEmbeddings = AmazonEmbeddings;
