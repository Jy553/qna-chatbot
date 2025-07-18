

exports.createRequestObject = function (question, requestType) {
    const request = {
        "_type": 'LEX',
        "_event": {
            "session": {
                "attributes": { "idtokenjwt": "mock_id_token" },
                "user": { "userId": "mockUserId" }
            }
        },
        "_settings": {
            "MINIMUM_CONFIDENCE_SCORE": 0.6,
            "ENFORCE_VERIFIED_IDENTITY": false,
            "ENABLE_REDACTING_WITH_COMPREHEND": false,
            "LAMBDA_PREPROCESS_HOOK": "",
            "IDENTITY_PROVIDER_JWKS_URLS": [],
            "NO_VERIFIED_IDENTITY_QUESTION": "no_verified_identity",
            "PII_REJECTION_QUESTION": "pii_rejection_question",
            "ENABLE_MULTI_LANGUAGE_SUPPORT": true,
            "CONNECT_NEXT_PROMPT_VARNAME": "connect_nextPrompt",
            "SMS_HINT_REMINDER_ENABLE": true,
            "SMS_HINT_REMINDER_INTERVAL_HRS": 24,
            "SMS_HINT_REMINDER": "(Feedback? Reply THUMBS UP or THUMBS DOWN. Ask HELP ME at any time)",
            "CONNECT_ENABLE_VOICE_RESPONSE_INTERRUPT": false,
            "DEFAULT_ALEXA_LAUNCH_MESSAGE": "Hello, Please ask a question",
            "DEFAULT_ALEXA_STOP_MESSAGE": "Goodbye"
        },
        "session": {
            "qnabotcontext": {
                "elicitResponse": {}
            },
            "idtokenjwt": "mock_id_token",
            
        },
        "question": question,
        "_userInfo": {
            "TimeSinceLastInteraction": 3600
        }
    };

    if (requestType === "specialtyBot") {
        request.session.qnabotcontext.specialtyBot = "mock_speciality_bot"
        request.session.qnabotcontext.specialtyBot = "mock_speciality_alias"
        request.session.qnabotcontext.sBChainingConfig = ""
    }

    if (requestType === "elicitResponse") {
        request.session.qnabotcontext.elicitResponse = { "responsebot": "testBot" };
    }

    if (requestType === "specialtyLambda") {
        request.session.specialtyLambda = "mock_specialty_lambda_arn";
    }
    if (requestType === "queryLambda") {
        request.session.queryLambda = "mock_query_lambda_arn";
    }

    return request;
}

exports.createResponseObject = function () {
    const response = {
        "type": "PlainText",
        "message": "The Q and A Bot uses Amazon Lex and Alexa to provide a natural language interface for your FAQ knowledge base, so your users can just ask a question and get a quick and relevant answer.",
        "session": {
            "idtokenjwt": "<token redacted>",
            "qnabotcontext": { "specialtyBot": "" },
            "topic": "QnABot",
            "appContext": "",
            "qnabot_qid": "QnABot.001",
            "qnabot_gotanswer": "true"
        },

        "intentname": "FallbackIntent",
        "_userInfo": {
            "UserId": "Admin",
            "InteractionCount": 2,
            "UserName": "Admin",
            "isVerifiedIdentity": "true",
            "TimeSinceLastInteraction": 1697549029.593,
            "FirstSeen": "Wed Oct 18 2023 01:23:49 GMT+0000 (Coordinated Universal Time)",
            "LastSeen": "Wed Oct 18 2023 01:23:49 GMT+0000 (Coordinated Universal Time)",
        },
        "got_hits": 1,
        "plainMessage": "The Q and A Bot uses Amazon Lex and Alexa to provide a natural language interface for your FAQ knowledge base, so your users can just ask a question and get a quick and relevant answer.",
    }

    return response;
}


exports.createMockRoutingResponse = function (type, progress) {
    const elicitResponse = {
        "req": {
            "_type": 'LEX',
            "_clientType": "LEX.LexWebUI.Text",
            "_lexVersion": "V2",
            "_event": {
                "inputTranscript": "What is Q and A Bot",
                "userId": "mock_user_id",
                "sessionState": {
                    "intent": {
                        "name": "mockIntent"
                    },
                },
                "bot": {
                    "localeId": "en_US"
                }
            },
            "_settings": {
                "MINIMUM_CONFIDENCE_SCORE": 0.6,
                "ENFORCE_VERIFIED_IDENTITY": false,
                "ENABLE_REDACTING_WITH_COMPREHEND": false,
                "LAMBDA_PREPROCESS_HOOK": "",
                "IDENTITY_PROVIDER_JWKS_URLS": [],
                "NO_VERIFIED_IDENTITY_QUESTION": "no_verified_identity",
            },
            "question": "What is Q and A Bot"
        },
        "res": {
            "type": "PlainText",
            "message": "The Q and A Bot uses Amazon Lex and Alexa to provide a natural language interface for your FAQ knowledge base, so your users can just ask a question and get a quick and relevant answer.",
            "session": {
                "idtokenjwt": "<token redacted>",
                "qnabotcontext": { "elicitResponse": {} },
                "topic": "QnABot",
                "appContext": "",
                "qnabot_qid": "QnABot.001",
                "qnabot_gotanswer": "true"
            },

            "intentname": "FallbackIntent",
            "_userInfo": {
                "UserId": "Admin",
                "InteractionCount": 2,
                "UserName": "Admin",
                "isVerifiedIdentity": "true",
                "TimeSinceLastInteraction": 1697549029.593,
                "FirstSeen": "Wed Oct 18 2023 01:23:49 GMT+0000 (Coordinated Universal Time)",
                "LastSeen": "Wed Oct 18 2023 01:23:49 GMT+0000 (Coordinated Universal Time)",
            },
            "result": {
                "elicitResponse": {}
            },
            "got_hits": 1,
            "plainMessage": "The Q and A Bot uses Amazon Lex and Alexa to provide a natural language interface for your FAQ knowledge base, so your users can just ask a question and get a quick and relevant answer.",
        }
    }

    if (type === "elicitResponse") {
        elicitResponse.res.session.qnabotcontext.elicitResponse = { "progress": progress };
        elicitResponse.res.result.elicitResponse.responsebot_hook = "mock_responsebot_hook";
        elicitResponse.res.result.elicitResponse.response_sessionattr_namespace = "mock_namespace";
    }
    if (type === "specialtyBot") {
        elicitResponse.res.result.botRouting = {
            "specialty_bot": "mock_specialty_bot",
            "specialty_bot_alias": "mock_specialty_bot_alias",
            "specialty_bot_name": "mock_specialty_bot_name",
        };
    }
    return elicitResponse;
}

exports.createMockEsQueryResponse = function () {
    const response = {
        "req": {
            "_type": 'LEX',
            "_clientType": "LEX.LexWebUI.Text",
            "_lexVersion": "V2",
            "_event": {
                "inputTranscript": "What is Q and A Bot",
                "userId": "mock_user_id",
                "sessionState": {
                    "intent": {
                        "name": "mockIntent"
                    },
                },
                "bot": {
                    "localeId": "en_US"
                }
            },
            "_settings": {
                "MINIMUM_CONFIDENCE_SCORE": 0.6,
                "ENFORCE_VERIFIED_IDENTITY": false,
                "ENABLE_REDACTING_WITH_COMPREHEND": false,
                "LAMBDA_PREPROCESS_HOOK": "",
                "IDENTITY_PROVIDER_JWKS_URLS": [],
                "NO_VERIFIED_IDENTITY_QUESTION": "no_verified_identity",
            },
            "session": {
                "botName": "QnABot"
            },
            "question": "What is Q and A Bot"
        },
        "res": {
            "type": "PlainText",
            "message": "The Q and A Bot uses Amazon Lex and Alexa to provide a natural language interface for your FAQ knowledge base, so your users can just ask a question and get a quick and relevant answer.",
            "session": {
                "idtokenjwt": "<token redacted>",
                "qnabotcontext": { "elicitResponse": {} },
                "topic": "QnABot",
                "appContext": "",
                "qnabot_qid": "QnABot.001",
                "qnabot_gotanswer": "true",
                "botName": "QnABot"
            },
            "result": {
                "args": [],
                "a": "The Q and A Bot uses Amazon Lex and Alexa to provide a natural language interface for your FAQ knowledge base, so your users can just ask a question and get a quick and relevant answer.",
                "questions": [
                    {
                        "q": "What is Q and A Bot"
                    }
                ],
                "type": "qna",
                "quniqueterms": "What is Q and A Bot",
                "qid": "QnABot.001",
            },

            "intentname": "FallbackIntent",
            "_userInfo": {
                "UserId": "Admin",
                "InteractionCount": 2,
                "UserName": "Admin",
                "isVerifiedIdentity": "true",
                "TimeSinceLastInteraction": 1697549029.593,
                "FirstSeen": "Wed Oct 18 2023 01:23:49 GMT+0000 (Coordinated Universal Time)",
                "LastSeen": "Wed Oct 18 2023 01:23:49 GMT+0000 (Coordinated Universal Time)",
            },
            "got_hits": 1,
            "plainMessage": "The Q and A Bot uses Amazon Lex and Alexa to provide a natural language interface for your FAQ knowledge base, so your users can just ask a question and get a quick and relevant answer.",
        }
    }
    return response;
}
