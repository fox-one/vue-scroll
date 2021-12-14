import Scroll from './Scroll.vue';
import type { defineComponent } from '@vue/composition-api';
import type { VueConstructor } from 'vue';

export type Scroll = ReturnType<typeof defineComponent> & {
  install(app: VueConstructor<Vue>): void
}

(Scroll as Scroll).install = (app: VueConstructor<Vue>): void => {
  app.component('FScroll', Scroll);
};

export default Scroll;
