 
exports.con = function (address)  {
    return {
        search: jest.fn(() => {
            return {
                statusCode: 200,
                body: {
                    _scroll_id: '1.0',
                    hits: {
                        hits: [{
                            _source: {
                                qid: '1',
                                type: address,
                                questions: [
                                    {
                                        q: 'What is QnABot?'
                                    },
                                    {
                                        q: 'How is weather today?'
                                    }
                                ]
                            }
                        }]
                    }
                },
            };
        }),
        scroll: jest.fn(() => {
            return {
                statusCode: 200,
                body: {
                    _scroll_id: '2.0',
                    hits: {
                        hits: []
                    }
                }
            };
        }).mockImplementationOnce(() => {
            return {
                statusCode: 200,
                body: {
                    _scroll_id: '3.0',
                    hits: {
                        hits: [{
                            _source: {
                                qid: '2',
                                type: address,
                                questions: [
                                    {
                                        q: 'What is best place to see northern lights?'
                                    },
                                    {
                                        q: 'What is Best Indian restaurant in US?'
                                    }
                                ]
                            }
                        }]
                    }
                }
            };
        })
    };
};
