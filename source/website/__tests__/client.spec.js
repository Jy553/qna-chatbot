
import clientModule from '../js/client.vue';
import { shallowMount } from '@vue/test-utils';

describe('js client module', () => {
    test('mounted', () => {
        const wrapper = shallowMount(clientModule);
        expect(wrapper.exists()).toBe(true);
    });
});
