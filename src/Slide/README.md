# Slide

## APIs

### Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls(optional) | The classname prefix for wholly control the component style | string | `'slide'` | 

### Slots
| Name | Description |
| --- | --- |
| default(optional) | The default Vue slot |

## Example

```vue
<template>
  <Slide>
    {{ 'Hello Slide' }}
  </Slide>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Slide } from './Slide';

  @Component(
    components: {
      Slide
    }
  )
  export class App extends Vue {
    mounted () {
      console.info('mounted!')
    }
  }
</script>
```
