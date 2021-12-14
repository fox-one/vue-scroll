import type { VueConstructor } from 'vue';
import Scroll from './Scroll';
import Slide from './Slide';

install.installed = false;
function install (Vue: VueConstructor<Vue>) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('FScroll', Scroll);
  Vue.component('FSlide', Slide);
}

let GlobalVue;
const win = window ?? global;
if (typeof win !== 'undefined') {
  GlobalVue = win.Vue;
}

if (GlobalVue) install(GlobalVue);

export * from './Scroll';
export * from './Slide';
export { scrollWrapperHeight } from './utils/helper';

export default {
  install
};