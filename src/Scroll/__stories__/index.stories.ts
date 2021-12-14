import { storiesOf } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
import FScroll from '../';
import '../style';

storiesOf('Scroll', module)
  .addParameters({
    readme: {
      sidebar: require('../README.md').default,
      highlightSidebar: true,
      codeTheme: 'github'
    },
    options: { theme: themes.light },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6'
    }
  })
  .add('with text', () => ({
    components: {
      FScroll
    },
    template: `<f-scroll :data="[]">
    <section>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}" >{{'Hello Scroll 1'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 2'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 3'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 4'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 5'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 6'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 7'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 8'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 9'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 10'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 11'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 12'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 13'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 14'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 15'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 16'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 17'}}</div>
      <div :style="{ textAlign: 'center', padding: '30px 0', border: '1px solid green'}">{{'Hello Scroll 18'}}</div>
    </section>
    </f-scroll>`
  }));
