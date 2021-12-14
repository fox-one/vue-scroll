import { storiesOf } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
import FSlide from '../';
import '../style';

storiesOf('Slide', module)
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
      FSlide
    },
    template: `<section :style="{overflow: 'hidden'}">
      <f-slide :data="[]" >
        <div :style="{ display: 'inline-block', boxSizing: 'border-box', textAlign: 'center', padding: '30px 10px', border: '1px solid gold', margin: '5px 0' }" >{{'Hello Slide 1'}}</div>
        <div :style="{ display: 'inline-block', boxSizing: 'border-box', textAlign: 'center', padding: '30px 10px', border: '1px solid gold', margin: '5px 0' }">{{'Hello Slide 2'}}</div>
        <div :style="{ display: 'inline-block', boxSizing: 'border-box', textAlign: 'center', padding: '30px 10px', border: '1px solid gold', margin: '5px 0' }">{{'Hello Slide 3'}}</div>
        <div :style="{ display: 'inline-block', boxSizing: 'border-box', textAlign: 'center', padding: '30px 10px', border: '1px solid gold', margin: '5px 0' }">{{'Hello Slide 4'}}</div>
        <div :style="{ display: 'inline-block', boxSizing: 'border-box', textAlign: 'center', padding: '30px 10px', border: '1px solid gold', margin: '5px 0' }">{{'Hello Slide 5'}}</div>
        <div :style="{ display: 'inline-block', boxSizing: 'border-box', textAlign: 'center', padding: '30px 10px', border: '1px solid gold', margin: '5px 0' }">{{'Hello Slide 6'}}</div>
      </f-slide>
    </section>`
  }));
