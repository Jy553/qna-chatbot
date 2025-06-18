
const osWarmer = require('../index');
const warmer = new (require('../lib'))();

jest.mock('../lib');

describe('when calling lambda handler function', () => {
    test('processing throws error and action is END', async () => {
        warmer.perform.mockReturnValue(('success'));
        expect(await osWarmer.warmer({}, null, null)).toEqual("complete");
    });
});