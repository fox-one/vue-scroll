
<template>
  <div ref="wrapper" class="f-scroll-wrapper" :class="classes" :style="{ height }">
    <slot/>
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
import Pullup from '@better-scroll/pull-up';
import Pulldown from '@better-scroll/pull-down';
import MouseWheel from '@better-scroll/mouse-wheel';
import ObserveImage from '@better-scroll/observe-image';
import ObserveDOM from '@better-scroll/observe-dom';
import { mediaQuery, generateUUID, scrollWrapperHeight } from '@utils/helper';

export default defineComponent({
  name: 'FScroll',
  props: {
    data: {
      type: Array as PropType<any[]>,
      default: () => ([])
    },
    height: {
      type: String,
      default: scrollWrapperHeight(0)
    },
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    pullup: {
      type: Boolean,
      default: false
    },
    pulldown: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
  },
  setup(props) {
    const scroll = ref();
    const lastYPos = ref(0);
    const currentX = ref(0);
    const currentY = ref(0);

    watch([props.data, props.height], () => {
      setTimeout(() => {
        scroll.value?.refresh();
      }, props.refreshDelay);
    });

    return { scroll, lastYPos, currentX, currentY };
  },
  computed: {
    classes() {
      return `scroll-${generateUUID()}`;
    }
  },
  activated() {
    this.$nextTick(() => {
      if (this.currentY !== this.scroll.y || this.currentX !== this.scroll.x) {
        this.scrollTo(this.currentX, this.currentY, 1);
      }
      if (!this.scroll) this.init();
      else this.scroll.refresh();
    });
  },
  deactivated() {
    this.currentX = this.scroll.x;
    this.currentY = this.scroll.y;
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

      const { desktop } = mediaQuery() || {};

      BScroll.use(Pullup);
      BScroll.use(Pulldown);
      BScroll.use(MouseWheel);
      BScroll.use(ObserveImage);
      BScroll.use(ObserveDOM);
      this.scroll = new BScroll(`.${this.classes}`, {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX,
        scrollY: true,
        useTransition: !!desktop,
        mouseWheel: {
          speed: 60,
          invert: false,
          easeTime: 100,
        },
        observeDOM: true,
        observeImage: true,
      });

      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', {
            ...pos,
            movingDirectionX: this.scroll.movingDirectionX,
            movingDirectionY: this.scroll.movingDirectionY,
            maxScrollY: this.scroll.maxScrollY,
            currentPosY: this.scroll.y - this.lastYPos,
          });
        });
        this.scroll.on('scrollEnd', () => {
          this.lastYPos = this.scroll.y;
        });
      }

      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          if (!!this.scroll.y && this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit('pullup');
          }
        });
      }

      if (this.pulldown) {
        this.scroll.on('touchEnd', (pos) => {
          if (pos.y > 50) {
            this.$emit('pulldown');
          }
        });
      }

      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll');
        });
      }
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
    scrollTo(...args: any) {
    // eslint-disable-next-line prefer-spread
      this.scroll?.scrollTo?.apply(this.scroll, args);
    },
    scrollToElement(...args: any) {
    // eslint-disable-next-line prefer-spread
      this.scroll?.scrollToElement?.apply(this.scroll, args);
    }
  }
});
</script>