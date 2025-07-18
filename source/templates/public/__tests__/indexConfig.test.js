

const mockConfig = require('./mockConfig.json');
const mockMaster = require('./mockMaster');
const expectedResult = require('./expectedResult');

function create(filename) {
    const file = `../${filename}`;
    return require(file);
}

describe('public template with config', () => {
    beforeEach(() => {
        jest.mock('../../master', () => mockMaster);
        jest.mock('../../../config.json', () => mockConfig);
    });

    it('uses default params if config file is not set', async () => {
        const templateFile = await create('index.js');
        expect(templateFile).toEqual(expectedResult);
    });

    afterEach(() => {
        jest.resetModules();
    });
});
