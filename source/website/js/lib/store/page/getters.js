

module.exports = {
    pages(state) {
        return Math.ceil(state.total / state.perpage);
    },
};
