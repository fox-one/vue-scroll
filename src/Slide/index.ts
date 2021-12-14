import Slide from './Slide.vue';
import type { defineComponent } from '@vue/composition-api';
import type { VueConstructor } from 'vue';

export type Slide = ReturnType<typeof defineComponent> & {
  install(app: VueConstructor<Vue>): void
}

(Slide as Slide).install = (app: VueConstructor<Vue>): void => {
  app.component('FSlide', Slide);
};

export default Slide;
