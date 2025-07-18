

const expectedResult = require('./expectedResult');
const mockMaster = require('./mockMaster');

function create(filename) {
    const file = `../${filename}`;
    return require(file);
}

describe('publictemplate with no config', () => {
    beforeEach(() => {
        jest.mock('../../master', () => mockMaster);
        jest.mock('../../../config.json', () => '{}');
    });

    it('uses default params if config file is not set', async () => {
        const templateFile = await create('index.js');
        expect(templateFile).toEqual(expectedResult);
    });

    afterEach(() => {
        jest.resetModules();
    });
});
