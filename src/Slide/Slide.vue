
<template>
  <div ref="wrapper" :class="classes('wrapper')">
    <div class="content">
      <slot />
    </div>
    <div v-if="showDots" :class="classes('dots')">
      <span
        v-for="num in pageCount"
        :key="num"
        :class="{ active: currentPageIndex === num - 1, [`${classes('dots__dot')}`]: true }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  PropType,
  ref
} from '@vue/composition-api';
import BScroll from '@better-scroll/core';
import Slide from '@better-scroll/slide';
import ObserveImage from '@better-scroll/observe-image';
import ObserveDOM from '@better-scroll/observe-dom';
import NestedScroll from '@better-scroll/nested-scroll';
import classnames from '@utils/classnames';

export default defineComponent({
  name: 'FSlide',
  props: {
    data: {
      type: Array as PropType<any[]>,
      default: () => ([])
    },
    pageCount: {
      type: Number,
      default: 1
    },
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    scrollY: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    listenFlick: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 400
    },
    threshold: {
      type: Number,
      default: 0.1
    },
    interval: {
      type: Number,
      default: 3000
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    nestedId: {
      type: [Number, String],
      default: ''
    }
  },
  setup(props) {
    const scroll = ref();
    const currentPageIndex = ref(0);
    const classes = ref(classnames('slide'));

    watch(() => props.data, () => {
      setTimeout(() => {
        scroll.value?.refresh();
      }, props.refreshDelay);
    });

    return { scroll, currentPageIndex, classes };
  },
  computed: {
    currentPage() {
      return (this as any).scroll?.getCurrentPage();
    },
    showDots() {
      return (this as any).pageCount > 1;
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) this.init();
      else this.scroll.refresh();
    });
  },
  methods: {
    init() {
      if (!this.$refs.wrapper) return;
      const options: Record<string, any> = {
        probeType: this.probeType,
        click: this.click,
        scrollX: true,
        scrollY: this.scrollY,
        momentum: false,
        bounce: false,
        slide: {
          loop: this.loop,
          threshold: this.threshold,
          speed: this.speed,
          listenFlick: this.listenFlick,
          autoplay: this.autoplay,
          interval: this.interval,
        },
        observeDOM: true,
        observeImage: true,
        nestedScroll: {
          groupId: this.nestedId
        }
      };
      BScroll.use(Slide);
      BScroll.use(ObserveImage);
      BScroll.use(ObserveDOM);
      if (this.nestedId || this.nestedId === 0) {
        BScroll.use(NestedScroll);
      } else {
        delete options.nestedScroll;
      }
      this.scroll = new BScroll(`.${this.classes('wrapper')}`, options);

      this.scroll.on('slideWillChange', (page) => {
        this.currentPageIndex = page.pageX;
      });
    },
    disable() {
      this.scroll?.disable();
    },
    enable() {
      this.scroll?.enable();
    },
    refresh() {
      this.scroll?.refresh();
    },
    prev() {
      this.scroll?.prev();
    },
    next() {
      this.scroll?.next();
    },
    goToPage(...args: any) {
    // eslint-disable-next-line prefer-spread
      this.scroll?.goToPage?.apply(this.scroll, args);
    }
  }
});
</script>