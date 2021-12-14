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
      <f-slide :data="[]">
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }" >{{'Hello Slide 1'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 2'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 3'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 4'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 5'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 6'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 7'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 8'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 9'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 10'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 11'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 12'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 13'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 14'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 15'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 16'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 17'}}</div>
        <div :style="{ display: 'inline-block', width: '75px', textAlign: 'center', padding: '10px', border: '1px solid gold', margin: '5px' }">{{'Hello Slide 18'}}</div>
      </f-slide>
    </section>`
  }));
