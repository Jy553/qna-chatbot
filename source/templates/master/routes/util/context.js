

module.exports = {
    stageVariables: {
        Region: 'us-east-1',
        PoolId: 'Pool-2121',
        ClientId: 'Client-adad',
        UserPool: 'User-adada',
        CognitoEndpoint: 'www.example.com',
        ESQidLambda: 'lambda',
        ApiUrl: 'url',
        BotName: 'bot',
        SlotType: 'slot',
        Intent: 'intent',
        LambdaArn: 'ar',
        ESEndpoint: 'test',
        ESIndex: 'index',
        ESType: 'type',
        ImportBucket: 'import',
        Id: 'id',
    },
    util: {
        parseJson: JSON.parse,
        urlDecode: (x) => x,
    },
    context: {
        apiId: 'id',
        stage: 'prod',
    },
};
