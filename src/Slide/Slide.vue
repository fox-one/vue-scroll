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
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import BScroll from '@better-scroll/core';
import Slide from '@better-scroll/slide';
import classnames from '@utils/classnames';

@Component
export default class extends Vue {
  @Prop({ default: [], type: Array }) public data!: any[];
  @Prop({ default: 1, type: Number }) public pageCount!: number;
  @Prop({ default: true, type: Boolean }) public click!: boolean;
  @Prop({ default: 1, type: Number }) public probeType!: number;
  @Prop({ default: false, type: Boolean }) public scrollY!: boolean;
  @Prop({ default: false, type: Boolean }) public autoplay!: boolean;
  @Prop({ default: false, type: Boolean }) public loop!: boolean;
  @Prop({ default: false, type: Boolean }) public listenFlick!: boolean;
  @Prop({ default: 400, type: Number }) public speed!: number;
  @Prop({ default: 0.1, type: Number }) public threshold!: number;
  @Prop({ default: 3000, type: Number }) public interval!: number;
  @Prop({ default: 20, type: Number }) public refreshDelay!: number;

  private classes = classnames('slide');

  public scroll;

  public currentPageIndex = 0;

  public get currentPage() {
    return this.scroll?.getCurrentPage();
  }

  public get showDots() {
    return this.pageCount > 1;
  }

  public mounted() {
    this.$nextTick(() => {
      if (!this.scroll) this.init();
      else this.scroll.refresh();
    });
  }

  protected init() {
    if (!this.$refs.wrapper) return;

    BScroll.use(Slide);
    this.scroll = new BScroll(`.${this.classes('wrapper')}`, {
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
    });

    this.scroll.on('slideWillChange', (page) => {
      this.currentPageIndex = page.pageX;
    });
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

  public prev() {
    this.scroll?.prev();
  }

  public next() {
    this.scroll?.next();
  }

  public goToPage(...args: any) {
    // eslint-disable-next-line prefer-spread
    this.scroll?.goToPage?.apply(this.scroll, args);
  }

  @Watch('data')
  public handleDataChange() {
    setTimeout(() => {
      this.refresh();
    }, this.refreshDelay);
  }
}
</script>
