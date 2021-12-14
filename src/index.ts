import VueCompositionAPI from '@vue/composition-api';
import Scroll from './Scroll';
import Slide from './Slide';

import type { VueConstructor } from 'vue';

install.installed = false;
function install (Vue: VueConstructor<Vue>) {
  if (install.installed) return;
  install.installed = true;
  Vue.use(VueCompositionAPI);
  Vue.component('FScroll', Scroll);
  Vue.component('FSlide', Slide);
}

let GlobalVue;
const win = window ?? global;
if (typeof win !== 'undefined') {
  GlobalVue = win.Vue;
}

if (GlobalVue) install(GlobalVue);

export { scrollWrapperHeight } from './utils/helper';

export default {
  install
};
