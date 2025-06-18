

function inIgnoreUtterances(utterance, ignoreUtterancesSetting) {
    const cleanedUtteranceList = ignoreUtterancesSetting.split(',').map((item) => item.replace(/[.!;-?]/g, '').trim().toLowerCase());
    const ignoreUtterances = new Set(cleanedUtteranceList);
    return ignoreUtterances.has(utterance.replace(/[.,!;-?]/g, '').trim().toLowerCase());
}
exports.inIgnoreUtterances = inIgnoreUtterances;
