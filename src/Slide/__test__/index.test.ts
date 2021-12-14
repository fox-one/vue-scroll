import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { shallowMount, mount } from '@vue/test-utils';
import Slide from '../';

Vue.use(VueCompositionAPI);

describe('Slide', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Slide);
    expect(wrapper).toMatchSnapshot();
  });
});
