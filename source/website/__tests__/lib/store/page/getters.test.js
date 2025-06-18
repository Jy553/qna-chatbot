
const gettersModule = require('../../../../js/lib/store/page/getters');

describe('getters page test', () => {
    test('pages', () => {
        const state = {
            total: 10,
            perpage: 5,
        }
        const expectedPages = 2;
        expect(gettersModule.pages(state)).toEqual(expectedPages);
    });
});
