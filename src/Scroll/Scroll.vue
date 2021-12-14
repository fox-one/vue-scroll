<template>
  <div ref="wrapper" class="wrapper" :class="classes" :style="{ height }">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
import Pulldown from '@better-scroll/pull-down';
import MouseWheel from '@better-scroll/mouse-wheel';
import ObserveImage from '@better-scroll/observe-image';
import ObserveDOM from '@better-scroll/observe-dom';
import { mediaQuery, generateUUID, scrollWrapperHeight } from '@utils/helper';

@Component({
  name: 'FScroll'
})
export default class extends Vue {
  @Prop({ default: [], type: Array }) public data!: any[];
  @Prop({
    default: '100vh',
    type: String,
  })
  public height!: string;
  @Prop({ default: 1, type: Number }) public probeType!: number;
  @Prop({ default: true, type: Boolean }) public click!: boolean;
  @Prop({ default: false, type: Boolean }) public scrollX!: boolean;
  @Prop({ default: false, type: Boolean }) public listenScroll!: boolean;
  @Prop({ default: false, type: Boolean }) public pullup!: boolean;
  @Prop({ default: false, type: Boolean }) public pulldown!: boolean;
  @Prop({ default: false, type: Boolean }) public beforeScroll!: boolean;
  @Prop({ default: 20, type: Number }) public refreshDelay!: number;

  public scroll;

  public lastYPos = 0;

  public currentX = 0;

  public currentY = 0;

  private get classes() {
    return `scroll-${generateUUID()}`;
  }

  public mounted() {
    this.$nextTick(() => {
      if (!this.scroll) this.init();
      else this.scroll.refresh();
    });
  }

  public activated() {
    this.$nextTick(() => {
      if (this.currentY !== this.scroll.y || this.currentX !== this.scroll.x) {
        this.scrollTo(this.currentX, this.currentY, 1);
      }
      if (!this.scroll) this.init();
      else this.scroll.refresh();
    });
  }

  public deactivated() {
    this.currentX = this.scroll.x;
    this.currentY = this.scroll.y;
  }

  protected init() {
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
  }

  public disable() {
    this.scroll?.disable();
  }

  public enable() {
    this.scroll?.enable();
  }

  public refresh() {
    this.scroll?.refresh();
  }

  public scrollTo(...args: any) {
    // eslint-disable-next-line prefer-spread
    this.scroll?.scrollTo?.apply(this.scroll, args);
  }

  public scrollToElement(...args: any) {
    // eslint-disable-next-line prefer-spread
    this.scroll?.scrollToElement?.apply(this.scroll, args);
  }

  @Watch('height')
  @Watch('data')
  public handleDataChange() {
    setTimeout(() => {
      this.refresh();
    }, this.refreshDelay);
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
}
</style>
