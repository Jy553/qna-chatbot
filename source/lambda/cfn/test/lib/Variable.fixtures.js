

exports.s3BucketObject = function() {
    const response = {
        key: 'mock_key',
        value: 'mock_value',
        mock_object: {
            key: 'mock_object_key',
            value: 'MOCK_OBJECT_VALUE',
            op: 'toLowerCase'
        }
    }

    return response;
}