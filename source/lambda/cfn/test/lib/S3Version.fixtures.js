

exports.s3BucketObject = function() {
    const response = {
        Bucket: 'mock_bucket',
        Key: 'mock_key'
    }

    return response;
}

exports.headObjectCommandObject = function() {
    const response = {
        VersionId: '3'
    }

    return response;
}
