

function empty(input) {
    if (input.type === 'string') {
        return '';
    }
    if (input.type === 'boolean') {
        return false;
    }
    if (input.type === 'array') {
        return [empty(input.items)];
    }
    if (input.type === 'object') {
        const out = {};
        Object.keys(input.properties || {}).forEach((key) => (out[key] = empty(input.properties[key])));

        return out;
    }
}
module.exports = empty;
