

exports.event = {
    RequestType: 'Create',
    ResponseURL: 'https://localhost',
    ResourceProperties: {
        Bucket: 'test-bucket',
        Key: 'test-key',
    },
};

exports.endMock = jest.fn();

exports.writeMock = jest.fn().mockImplementation((body) => {
    expect(JSON.parse(body).PhysicalResourceId).toEqual('mock log stream name');
});

exports.doneMock = jest.fn();

