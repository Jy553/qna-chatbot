

const fs = require('fs');
const _ = require('lodash');

const files = [
    require('./UpgradeAutoImport'),
    require('./bucket'),
    require('./resources'),
];

module.exports = {
    Resources: _.assign.apply({}, files),
    AWSTemplateFormatVersion: '2010-09-09',
    Description: `(SO0189n-import) QnABot nested import resources - Version v${process.env.npm_package_version}`,
    Outputs: require('./outputs'),
    Parameters: {
        ContentDesignerOutputBucket: { Type: 'String' },
        CFNLambda: { Type: 'String' },
        CFNInvokePolicy: { Type: 'String' },
        S3Clean: { Type: 'String' },
        BootstrapBucket: { Type: 'String' },
        BootstrapPrefix: { Type: 'String' },
        EsEndpoint: { Type: 'String' },
        EsArn: { Type: 'String' },
        EsProxyLambda: { Type: 'String' },
        ImportBucket: { Type: 'String' },
        ExportBucket: { Type: 'String' },
        VarIndex: { Type: 'String' },
        MetricsIndex: { Type: 'String' },
        FeedbackIndex: { Type: 'String' },
        DefaultQnABotSettings: { Type: 'String' },
        PrivateQnABotSettings: { Type: 'String' },
        CustomQnABotSettings: { Type: 'String' },
        VPCSubnetIdList: { Type: 'String' },
        VPCSecurityGroupIdList: { Type: 'String' },
        XraySetting: { Type: 'String' },
        EmbeddingsLambdaArn: { Type: 'String' },
        EmbeddingsApi: { Type: 'String' },
        EmbeddingsLambdaDimensions: { Type: 'String' },
        EmbeddingsSagemakerEndpoint: { Type: 'String' },
        EmbeddingsSagemakerEndpointArn: { Type: 'String' },
        EmbeddingsBedrockModelId: { Type: 'String' },
        AwsSdkLayerLambdaLayer: { Type: 'String' },
        CommonModulesLambdaLayer: { Type: 'String' },
        EsProxyLambdaLayer: { Type: 'String' },
        QnABotCommonLambdaLayer: { Type: 'String' },
        LogRetentionPeriod: { Type: 'Number' },
    },
    Conditions: {
        VPCEnabled: {
            'Fn::Not': [{ 'Fn::Equals': ['', { Ref: 'VPCSecurityGroupIdList' }] }],
        },
        XRAYEnabled: { 'Fn::Equals': [{ Ref: 'XraySetting' }, 'TRUE'] },
        EmbeddingsLambdaArn: { 'Fn::Not': [{ 'Fn::Equals': [{ Ref: 'EmbeddingsLambdaArn' }, ''] }] },
        EmbeddingsSagemaker: { 'Fn::Not': [{ 'Fn::Equals': [{ Ref: 'EmbeddingsSagemakerEndpointArn' }, ''] }] },
        EmbeddingsBedrock: { 'Fn::Equals': [{ Ref: 'EmbeddingsApi' }, 'BEDROCK'] },
        LogRetentionPeriodIsNotZero: { 'Fn::Not': [{ 'Fn::Equals': [{ Ref: 'LogRetentionPeriod' }, 0] }] }
    },
};
