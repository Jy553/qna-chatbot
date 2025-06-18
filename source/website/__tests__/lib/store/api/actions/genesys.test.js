
import mockedContext from './mockedContext';

const genesysModule = require('../../../../../js/lib/store/api/actions/genesys');

describe('genesys action test', () => {
    test('getGenesysCallFlow is called.', () => {
        const opts = {};
        genesysModule.getGenesysCallFlow(mockedContext, opts);
        expect(mockedContext.dispatch).toHaveBeenCalledTimes(1);
        expect(mockedContext.dispatch).toHaveBeenCalledWith('_request', {
            url: mockedContext.rootState.info._links.genesys.href,
            method: 'get',
        });
    });
});
