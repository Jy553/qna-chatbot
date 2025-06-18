

function utteranceIsQid(utterance) {
    return utterance.toLowerCase().startsWith('qid::');
}

exports.utteranceIsQid = utteranceIsQid;
