

exports.mockCallFlow = {
  "modules": [
      {
          "id": "5d04600d-74e5-4799-a6ab-4ab65962f229",
          "type": "SetLoggingBehavior",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "df35a20f-0d7f-4bb2-b8e4-fa5510708371"
              }
          ],
          "parameters": [
              {
                  "name": "LoggingBehavior",
                  "value": "Enable"
              }
          ],
          "metadata": {
              "position": {
                  "x": 75,
                  "y": 176.99999198913582
              }
          }
      },
      {
          "id": "df35a20f-0d7f-4bb2-b8e4-fa5510708371",
          "type": "SetVoice",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "341e4a2b-3d37-4810-8163-f6bf721f4d8a"
              }
          ],
          "parameters": [
              {
                  "name": "GlobalVoice",
                  "value": "Matthew"
              },
              {
                  "name": "GlobalEngine",
                  "value": "Neural"
              },
              {
                  "name": "SpeakingStyle",
                  "value": "Conversational"
              }
          ],
          "metadata": {
              "position": {
                  "x": 78,
                  "y": 343
              },
              "overrideConsoleVoice": true,
              "defaultVoice": "Conversational",
              "fragments": {
                  "SetContactData": "341e4a2b-3d37-4810-8163-f6bf721f4d8a"
              }
          }
      },
      {
          "id": "341e4a2b-3d37-4810-8163-f6bf721f4d8a",
          "type": "SetContactData",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "3f3d91aa-e448-4119-9e93-69ef25719713"
              },
              {
                  "condition": "Error",
                  "transition": "3f3d91aa-e448-4119-9e93-69ef25719713"
              }
          ],
          "parameters": [
              {
                  "name": "ContactData",
                  "namespace": null,
                  "languageCode": "en-US"
              }
          ],
          "metadata": {
              "position": {
                  "x": 0,
                  "y": 0
              }
          }
      },
      {
          "id": "5f176a99-f1d1-45f1-8b59-86ab098b902a",
          "type": "Transfer",
          "branches": [
              {
                  "condition": "AtCapacity",
                  "transition": "bf5ece6b-6ebb-4a59-bd9b-15e45d2b0993"
              },
              {
                  "condition": "Error",
                  "transition": "bf5ece6b-6ebb-4a59-bd9b-15e45d2b0993"
              }
          ],
          "parameters": [],
          "metadata": {
              "position": {
                  "x": 2173,
                  "y": 16
              },
              "useDynamic": false,
              "queue": null
          },
          "target": "Queue"
      },
      {
          "id": "bf5ece6b-6ebb-4a59-bd9b-15e45d2b0993",
          "type": "Disconnect",
          "branches": [],
          "parameters": [],
          "metadata": {
              "position": {
                  "x": 2426,
                  "y": 252
              }
          }
      },
      {
          "id": "856e588d-b0d3-40e4-92e2-f7d1b833cfbb",
          "type": "SetQueue",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "5f176a99-f1d1-45f1-8b59-86ab098b902a"
              },
              {
                  "condition": "Error",
                  "transition": "5f176a99-f1d1-45f1-8b59-86ab098b902a"
              }
          ],
          "parameters": [
              {
                  "name": "Queue",
                  "value": "",
                  "namespace": null,
                  "resourceName": "BasicQueue"
              }
          ],
          "metadata": {
              "position": {
                  "x": 1944,
                  "y": 19
              },
              "useDynamic": false,
              "queue": {
                  "id": "",
                  "text": "BasicQueue"
              }
          }
      },
      {
          "id": "bea09cee-1c9c-4a4b-917c-969c7dbdfd92",
          "type": "PlayPrompt",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "bf5ece6b-6ebb-4a59-bd9b-15e45d2b0993"
              }
          ],
          "parameters": [
              {
                  "name": "Text",
                  "value": "This is where I'd route to a main menu.",
                  "namespace": null
              },
              {
                  "name": "TextToSpeechType",
                  "value": "text"
              }
          ],
          "metadata": {
              "position": {
                  "x": 1944,
                  "y": 213.99999999999994
              },
              "useDynamic": false
          }
      },
      {
          "id": "d26a2c6b-e9ff-474e-a4e5-14d8175e7bce",
          "type": "PlayPrompt",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "bf5ece6b-6ebb-4a59-bd9b-15e45d2b0993"
              }
          ],
          "parameters": [
              {
                  "name": "Text",
                  "value": "Thank you for using QnA Bot, Goodbye",
                  "namespace": null
              },
              {
                  "name": "TextToSpeechType",
                  "value": "text"
              }
          ],
          "metadata": {
              "position": {
                  "x": 1944,
                  "y": 363.99999999999994
              },
              "useDynamic": false
          }
      },
      {
          "id": "bb036f1e-bdfa-4c37-a56f-d24d75ef5551",
          "type": "PlayPrompt",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "bf5ece6b-6ebb-4a59-bd9b-15e45d2b0993"
              }
          ],
          "parameters": [
              {
                  "name": "Text",
                  "value": "This is embarrassing. I'm sorry I don't know the answer to your questions.  I'm still learning, so check back tomorrow.",
                  "namespace": null
              },
              {
                  "name": "TextToSpeechType",
                  "value": "text"
              }
          ],
          "metadata": {
              "position": {
                  "x": 1952,
                  "y": 534
              },
              "useDynamic": false
          }
      },
      {
          "id": "3f3d91aa-e448-4119-9e93-69ef25719713",
          "type": "SetAttributes",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "ed5ef82c-eb8c-4770-bdd1-0971f9391b1c"
              },
              {
                  "condition": "Error",
                  "transition": "ed5ef82c-eb8c-4770-bdd1-0971f9391b1c"
              }
          ],
          "parameters": [
              {
                  "name": "Attribute",
                  "value": "Ask another question or say return to main menu",
                  "key": "defaultPrompt",
                  "namespace": null
              }
          ],
          "metadata": {
              "position": {
                  "x": 76,
                  "y": 518.9999965667726
              }
          }
      },
      {
          "id": "ed5ef82c-eb8c-4770-bdd1-0971f9391b1c",
          "type": "CheckAttribute",
          "branches": [
              {
                  "condition": "NoMatch",
                  "transition": "709f5701-b720-4c4e-8c43-1a85a0f2b96a"
              },
              {
                  "condition": "Evaluate",
                  "conditionType": "Equals",
                  "conditionValue": "CHAT",
                  "transition": "c0a4597f-c841-4cce-9629-61658abff0b5"
              }
          ],
          "parameters": [
              {
                  "name": "Attribute",
                  "value": "Channel"
              },
              {
                  "name": "Namespace",
                  "value": "System"
              }
          ],
          "metadata": {
              "position": {
                  "x": 81,
                  "y": 728
              },
              "conditionMetadata": [
                  {
                      "id": "4e470c5c-f1e1-497f-bef9-3c98dcb47004",
                      "operator": {
                          "name": "Equals",
                          "value": "Equals",
                          "shortDisplay": "="
                      },
                      "value": "CHAT"
                  }
              ]
          }
      },
      {
          "id": "5d762456-76cb-4578-9c1f-4e5d79865754",
          "type": "CheckAttribute",
          "branches": [
              {
                  "condition": "Evaluate",
                  "conditionType": "Equals",
                  "conditionValue": "AGENT",
                  "transition": "856e588d-b0d3-40e4-92e2-f7d1b833cfbb"
              },
              {
                  "condition": "Evaluate",
                  "conditionType": "Equals",
                  "conditionValue": "MENU",
                  "transition": "bea09cee-1c9c-4a4b-917c-969c7dbdfd92"
              },
              {
                  "condition": "Evaluate",
                  "conditionType": "Equals",
                  "conditionValue": "END",
                  "transition": "d26a2c6b-e9ff-474e-a4e5-14d8175e7bce"
              },
              {
                  "condition": "NoMatch",
                  "transition": "1d0febd1-8929-464d-b677-c439c70e0e54"
              }
          ],
          "parameters": [
              {
                  "name": "Attribute",
                  "value": "nextAction"
              },
              {
                  "name": "Namespace",
                  "value": "Lex.SessionAttributes"
              }
          ],
          "metadata": {
              "position": {
                  "x": 1662,
                  "y": 33
              },
              "conditionMetadata": [
                  {
                      "operator": {
                          "name": "Equals",
                          "value": "Equals",
                          "shortDisplay": "="
                      },
                      "value": "AGENT",
                      "id": "25ebd33f-5d2c-419f-923f-8cddfd2cf9af"
                  },
                  {
                      "operator": {
                          "name": "Equals",
                          "value": "Equals",
                          "shortDisplay": "="
                      },
                      "value": "MENU",
                      "id": "9f1dff37-b033-4f99-95a8-1eb69e66ffdd"
                  },
                  {
                      "operator": {
                          "name": "Equals",
                          "value": "Equals",
                          "shortDisplay": "="
                      },
                      "value": "END",
                      "id": "e6b8e5cf-c08d-4c1a-a7fe-dce40f6720af"
                  }
              ]
          }
      },
      {
          "id": "53884deb-1fd6-4b55-ba0d-c5333d0a775b",
          "type": "SetVoice",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "9a341e75-4485-4233-b3de-45f37ce74a51"
              }
          ],
          "parameters": [
              {
                  "name": "GlobalVoice",
                  "value": "Matthew"
              }
          ],
          "metadata": {
              "position": {
                  "x": 607,
                  "y": 310
              },
              "overrideConsoleVoice": false,
              "defaultVoice": "Conversational",
              "fragments": {
                  "SetContactData": "9a341e75-4485-4233-b3de-45f37ce74a51"
              }
          }
      },
      {
          "id": "9a341e75-4485-4233-b3de-45f37ce74a51",
          "type": "SetContactData",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "5be79251-0fcd-4062-8a97-640e1d0ed5c4"
              },
              {
                  "condition": "Error",
                  "transition": "5be79251-0fcd-4062-8a97-640e1d0ed5c4"
              }
          ],
          "parameters": [
              {
                  "name": "ContactData",
                  "namespace": null,
                  "languageCode": "en-US"
              }
          ],
          "metadata": {
              "position": {
                  "x": 0,
                  "y": 0
              }
          }
      },
      {
          "id": "7f6a465d-c876-4e08-b087-155b544bce7f",
          "type": "CheckAttribute",
          "branches": [
              {
                  "condition": "Evaluate",
                  "conditionType": "Equals",
                  "conditionValue": "true",
                  "transition": "5d762456-76cb-4578-9c1f-4e5d79865754"
              },
              {
                  "condition": "NoMatch",
                  "transition": "151ea3ec-6546-440a-ab9e-5538d862fd52"
              }
          ],
          "parameters": [
              {
                  "name": "Attribute",
                  "value": "qnabot_gotanswer"
              },
              {
                  "name": "Namespace",
                  "value": "Lex.SessionAttributes"
              }
          ],
          "metadata": {
              "position": {
                  "x": 1414,
                  "y": 118
              },
              "conditionMetadata": [
                  {
                      "operator": {
                          "name": "Equals",
                          "value": "Equals",
                          "shortDisplay": "="
                      },
                      "value": "true",
                      "id": "f4f4dece-2869-438a-8fa4-a9ddda6cf2d9"
                  }
              ]
          }
      },
      {
          "id": "151ea3ec-6546-440a-ab9e-5538d862fd52",
          "type": "Loop",
          "branches": [
              {
                  "condition": "Looping",
                  "transition": "1d0febd1-8929-464d-b677-c439c70e0e54"
              },
              {
                  "condition": "Complete",
                  "transition": "bb036f1e-bdfa-4c37-a56f-d24d75ef5551"
              }
          ],
          "parameters": [
              {
                  "name": "LoopCount",
                  "value": "2"
              }
          ],
          "metadata": {
              "position": {
                  "x": 1661,
                  "y": 311
              },
              "useDynamic": false
          }
      },
      {
          "id": "1d0febd1-8929-464d-b677-c439c70e0e54",
          "type": "SetAttributes",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "03d86415-cfef-4b8c-860f-c75946f4ba1f"
              },
              {
                  "condition": "Error",
                  "transition": "03d86415-cfef-4b8c-860f-c75946f4ba1f"
              }
          ],
          "parameters": [
              {
                  "name": "Attribute",
                  "value": "connect_nextPrompt",
                  "key": "prompt",
                  "namespace": "Lex.SessionAttributes"
              }
          ],
          "metadata": {
              "position": {
                  "x": 1161,
                  "y": 533
              }
          }
      },
      {
          "id": "c0a4597f-c841-4cce-9629-61658abff0b5",
          "type": "SetAttributes",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "03d86415-cfef-4b8c-860f-c75946f4ba1f"
              },
              {
                  "condition": "Error",
                  "transition": "03d86415-cfef-4b8c-860f-c75946f4ba1f"
              }
          ],
          "parameters": [
              {
                  "name": "Attribute",
                  "value": "Hello. Welcome to QnA bot.  Ask me a question.  Para español, ingrese español.  Pour le français, entrez français.",
                  "key": "prompt",
                  "namespace": null
              }
          ],
          "metadata": {
              "position": {
                  "x": 347,
                  "y": 7
              }
          }
      },
      {
          "id": "5be79251-0fcd-4062-8a97-640e1d0ed5c4",
          "type": "SetAttributes",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "03d86415-cfef-4b8c-860f-c75946f4ba1f"
              },
              {
                  "condition": "Error",
                  "transition": "03d86415-cfef-4b8c-860f-c75946f4ba1f"
              }
          ],
          "parameters": [
              {
                  "name": "Attribute",
                  "value": "Ask me a question.",
                  "key": "prompt",
                  "namespace": null
              }
          ],
          "metadata": {
              "position": {
                  "x": 856,
                  "y": 235
              }
          }
      },
      {
          "id": "03d86415-cfef-4b8c-860f-c75946f4ba1f",
          "type": "GetUserInput",
          "branches": [
              {
                  "condition": "Evaluate",
                  "conditionType": "Equals",
                  "conditionValue": "QnaIntent",
                  "transition": "7f6a465d-c876-4e08-b087-155b544bce7f"
              },
              {
                  "condition": "Evaluate",
                  "conditionType": "Equals",
                  "conditionValue": "FallbackIntent",
                  "transition": "7f6a465d-c876-4e08-b087-155b544bce7f"
              },
              {
                  "condition": "NoMatch",
                  "transition": "7f6a465d-c876-4e08-b087-155b544bce7f"
              },
              {
                  "condition": "Error",
                  "transition": "151ea3ec-6546-440a-ab9e-5538d862fd52"
              }
          ],
          "parameters": [
              {
                  "name": "Text",
                  "value": "prompt",
                  "namespace": "User Defined"
              },
              {
                  "name": "TextToSpeechType",
                  "value": "text"
              },
              {
                  "name": "BotAliasArn",
                  "value": "arn:aws:lex:ca-central-1:account-id:bot-alias/bot-id/alias-id",
                  "namespace": null
              },
              {
                  "name": "LexVersion",
                  "value": "V2"
              },
              {
                  "name": "Parameter",
                  "key": "x-amz-lex:barge-in-enabled:*:*",
                  "value": "true",
                  "namespace": null
              },
              {
                  "name": "Parameter",
                  "key": "isConnectChannel",
                  "value": "Channel",
                  "namespace": "System"
              },
              {
                  "name": "Parameter",
                  "key": "connectContactId",
                  "value": "ContactId",
                  "namespace": "System"
              },
              {
                  "name": "Parameter",
                  "key": "connect_nextPrompt",
                  "value": "defaultPrompt",
                  "namespace": "User Defined"
              },
              {
                  "name": "Parameter",
                  "key": "topic",
                  "value": "topic",
                  "namespace": "Lex.SessionAttributes"
              },
              {
                  "name": "Parameter",
                  "key": "qnabotcontext",
                  "value": "qnabotcontext",
                  "namespace": "Lex.SessionAttributes"
              }
          ],
          "metadata": {
              "position": {
                  "x": 1152,
                  "y": 124
              },
              "conditionMetadata": [
                  {
                      "id": "9d5ce3e5-28ae-4a5e-b40a-9aa85e9b835f",
                      "value": "QnaIntent"
                  },
                  {
                      "id": "f26a1e42-5ace-4b19-9b37-24873031c174",
                      "value": "FallbackIntent"
                  }
              ],
              "useDynamic": true,
              "dynamicMetadata": {
                  "x-amz-lex:barge-in-enabled:*:*": false,
                  "isConnectChannel": true,
                  "connectContactId": true,
                  "connect_nextPrompt": true,
                  "topic": true,
                  "qnabotcontext": true
              },
              "useLexBotDropdown": false,
              "useDynamicLexBotArn": false,
              "lexV2BotName": "QnABot-Test-Name",
              "lexV2BotAliasName": "live"
          },
          "target": "Lex"
      },
      {
          "id": "85463f05-0eeb-4589-acac-8d0ad911e250",
          "type": "SetAttributes",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "03d86415-cfef-4b8c-860f-c75946f4ba1f"
              },
              {
                  "condition": "Error",
                  "transition": "03d86415-cfef-4b8c-860f-c75946f4ba1f"
              }
          ],
          "parameters": [
              {
                  "name": "Attribute",
                  "value": "Hazme una pregunta.",
                  "key": "prompt",
                  "namespace": null
              }
          ],
          "metadata": {
              "position": {
                  "x": 853,
                  "y": 439
              }
          }
      },
      {
          "id": "0841f0f0-9865-46dd-9edd-027c2d5759dc",
          "type": "SetVoice",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "ef224a67-8306-4f48-ae53-6a5582804ff3"
              }
          ],
          "parameters": [
              {
                  "name": "GlobalVoice",
                  "value": "Lupe"
              },
              {
                  "name": "GlobalEngine",
                  "value": "Neural"
              },
              {
                  "name": "SpeakingStyle",
                  "value": "Conversational"
              }
          ],
          "metadata": {
              "position": {
                  "x": 624,
                  "y": 463
              },
              "overrideConsoleVoice": true,
              "defaultVoice": "Conversational",
              "fragments": {
                  "SetContactData": "ef224a67-8306-4f48-ae53-6a5582804ff3"
              }
          }
      },
      {
          "id": "ef224a67-8306-4f48-ae53-6a5582804ff3",
          "type": "SetContactData",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "85463f05-0eeb-4589-acac-8d0ad911e250"
              },
              {
                  "condition": "Error",
                  "transition": "85463f05-0eeb-4589-acac-8d0ad911e250"
              }
          ],
          "parameters": [
              {
                  "name": "ContactData",
                  "namespace": null,
                  "languageCode": "es-US"
              }
          ],
          "metadata": {
              "position": {
                  "x": 0,
                  "y": 0
              }
          }
      },
      {
          "id": "773371df-ef6b-49cc-819f-bd186abddf09",
          "type": "SetAttributes",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "03d86415-cfef-4b8c-860f-c75946f4ba1f"
              },
              {
                  "condition": "Error",
                  "transition": "03d86415-cfef-4b8c-860f-c75946f4ba1f"
              }
          ],
          "parameters": [
              {
                  "name": "Attribute",
                  "value": "Posez-moi une question.",
                  "key": "prompt",
                  "namespace": null
              }
          ],
          "metadata": {
              "position": {
                  "x": 859,
                  "y": 640
              }
          }
      },
      {
          "id": "709f5701-b720-4c4e-8c43-1a85a0f2b96a",
          "type": "GetUserInput",
          "branches": [
              {
                  "condition": "Timeout",
                  "transition": "53884deb-1fd6-4b55-ba0d-c5333d0a775b"
              },
              {
                  "condition": "NoMatch",
                  "transition": "53884deb-1fd6-4b55-ba0d-c5333d0a775b"
              },
              {
                  "condition": "Error",
                  "transition": "53884deb-1fd6-4b55-ba0d-c5333d0a775b"
              },
              {
                  "condition": "Evaluate",
                  "conditionType": "Equals",
                  "conditionValue": "1",
                  "transition": "53884deb-1fd6-4b55-ba0d-c5333d0a775b"
              },
              {
                  "condition": "Evaluate",
                  "conditionType": "Equals",
                  "conditionValue": "2",
                  "transition": "0841f0f0-9865-46dd-9edd-027c2d5759dc"
              },
              {
                  "condition": "Evaluate",
                  "conditionType": "Equals",
                  "conditionValue": "3",
                  "transition": "ae929b20-f060-4f36-aaed-0e9a334f03eb"
              }
          ],
          "parameters": [
              {
                  "name": "Text",
                  "value": "Hello. Welcome to QnA bot.  \nFor English, Press 1 or stay on the line.\nFor Spanish, Press 2.\nFor French, Press 3.",
                  "namespace": null
              },
              {
                  "name": "TextToSpeechType",
                  "value": "ssml"
              },
              {
                  "name": "Timeout",
                  "value": "5"
              },
              {
                  "name": "MaxDigits",
                  "value": "1"
              }
          ],
          "metadata": {
              "position": {
                  "x": 359,
                  "y": 346
              },
              "conditionMetadata": [
                  {
                      "id": "b2bc7891-295d-42bf-b69a-547c70870e90",
                      "value": "1"
                  },
                  {
                      "id": "ac6926e9-5247-4866-bd58-7f4b8eb3b78b",
                      "value": "2"
                  },
                  {
                      "id": "2d08fee2-7fdf-48db-913a-9cecf63fb4de",
                      "value": "3"
                  }
              ],
              "useDynamic": false,
              "useLexBotDropdown": true,
              "useDynamicLexBotArn": false
          },
          "target": "Digits"
      },
      {
          "id": "ae929b20-f060-4f36-aaed-0e9a334f03eb",
          "type": "SetVoice",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "41812b71-f998-4f7b-91b3-06d303d67b9e"
              }
          ],
          "parameters": [
              {
                  "name": "GlobalVoice",
                  "value": "Chantal"
              }
          ],
          "metadata": {
              "position": {
                  "x": 627,
                  "y": 618
              },
              "overrideConsoleVoice": false,
              "defaultVoice": "Standard",
              "fragments": {
                  "SetContactData": "41812b71-f998-4f7b-91b3-06d303d67b9e"
              }
          }
      },
      {
          "id": "41812b71-f998-4f7b-91b3-06d303d67b9e",
          "type": "SetContactData",
          "branches": [
              {
                  "condition": "Success",
                  "transition": "773371df-ef6b-49cc-819f-bd186abddf09"
              },
              {
                  "condition": "Error",
                  "transition": "773371df-ef6b-49cc-819f-bd186abddf09"
              }
          ],
          "parameters": [
              {
                  "name": "ContactData",
                  "namespace": null,
                  "languageCode": "fr-CA"
              }
          ],
          "metadata": {
              "position": {
                  "x": 0,
                  "y": 0
              }
          }
      }
  ],
  "version": "1",
  "type": "contactFlow",
  "start": "5d04600d-74e5-4799-a6ab-4ab65962f229",
  "metadata": {
      "entryPointPosition": {
          "x": 14.999982102400423,
          "y": 32.999981265496906
      },
      "snapToGrid": false,
      "name": "qna-sample-multi-lingual",
      "description": null,
      "type": "contactFlow",
      "status": "saved",
      "hash": "8c577aed02612c1cd79cf35bbb5b0357926cbdd7e776a7978c00c35f0f215400"
  }
}