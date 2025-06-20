

const qnabot = require('qnabot/logging');
const { Ai21 } = require('./Ai21');
const { AmazonLlm } = require('./AmazonLlm');
const { AmazonEmbeddings } = require('./AmazonEmbeddings');
const { Anthropic } = require('./Anthropic');
const { CohereLlm } = require('./CohereLlm');
const { CohereEmbeddings } = require('./CohereEmbeddings');
const { Meta } = require('./Meta');
const { bedrockClient } = require('./bedrockClient');

function getModelProvider(modelId) {
    return modelId.split('.')[0];
}

function isEmbedding(modelId) {
    return modelId.includes('embed');
}

function getProviderClass(modelId) {
    const modelProvider = getModelProvider(modelId);
    const isEmbeddingModel = isEmbedding(modelId);
    switch (modelProvider) {
    case 'ai21':
        return new Ai21();
    case 'amazon':
        return isEmbeddingModel ? new AmazonEmbeddings() : new AmazonLlm();
    case 'anthropic':
        return new Anthropic();
    case 'cohere':
        return isEmbeddingModel ? new CohereEmbeddings() : new CohereLlm();
    case 'meta':
        return new Meta();
    default:
        throw new Error(`Unsupported model provider: ${modelProvider}`);
    }
}

async function invokeBedrockModel(modelId, parameters, prompt, guardrails) {
    const modelProvider = getProviderClass(modelId);
    modelProvider.setParameters(parameters);
    modelProvider.setPrompt(prompt);
    const body = modelProvider.getParameters();
    qnabot.debug(`Bedrock Invoke model body: ${body}`);

    const response = await bedrockClient(modelId, body, guardrails);
    const generatedText = modelProvider.getResponseBody(response);
    return generatedText;
}

exports.invokeBedrockModel = invokeBedrockModel;
exports.isEmbedding = isEmbedding;
