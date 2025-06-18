

exports.createRequestObject = function (question,  qidExists) {
    const request = {
        "_event": {

        },
        "session": {
            "qnabotcontext": {
                'slot.test': 0
            },
            "idtokenjwt": "mock_id_token"
        },
        "question": question
    };

    if (qidExists) {
        request.qid = 10;
    }

    return request;
}

exports.createQueryResponseObject = {
   "hits": [
       {
           "_source": {
               "slots": {
                   "slotName": "test",
                   "slotRequired": true,
                   "slotValueCached": 10
               }
           }
       }
   ]
}
