import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { shallowMount, mount } from '@vue/test-utils';
import Scroll from '../';

Vue.use(VueCompositionAPI);

describe('Scroll', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Scroll);
    expect(wrapper).toMatchSnapshot();
  });
});
