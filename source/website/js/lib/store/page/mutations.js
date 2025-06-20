

module.exports = {
    setMode(store, mode) {
        store.mode = mode;
    },
    setPage(store, page) {
        store.current = page;
    },
    setTotal(store, total) {
        store.total = total;
    },
    incrementTotal(store, count) {
        const x = count || 1;
        store.page += x;
    },
    decrementTotal(store, count) {
        const x = count || 1;
        store.page -= x;
    },
    toggleMode(store, mode) {
        for (const x in store.mode) {
            if (x === mode) {
                if (mode === 'filter') {
                    store.mode[x].on = !store.mode[x].on;
                } else {
                    store.mode[x] = !store.mode[x];
                }
            } else if (x === 'filter') {
                store.mode[x].on = false;
            } else {
                store.mode[x] = false;
            }
        }
    },
    toggleSearch(store) {
        store.mode.search = !store.mode.search;
    },
    toggleFilter(store) {
        store.mode.filter = !store.mode.filter;
    },
};
