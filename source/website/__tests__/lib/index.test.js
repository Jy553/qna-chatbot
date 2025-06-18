
const indexModule = require('../../js/lib/index');

jest.mock('../../js/lib/router', () => {});
jest.mock('../../js/lib/store', () => {});

describe('lib js index module', () => {
    test('it exists', () => {
        expect(indexModule).toBeDefined();
    });
});
