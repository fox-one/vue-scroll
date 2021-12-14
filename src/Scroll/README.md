# Scroll

## APIs

### Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls(optional) | The classname prefix for wholly control the component style | string | `'scroll'` | 

### Slots
| Name | Description |
| --- | --- |
| default(optional) | The default Vue slot |

## Example

```vue
<template>
  <Scroll>
    {{ 'Hello Scroll' }}
  </Scroll>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Scroll } from './Scroll';

  @Component(
    components: {
      Scroll
    }
  )
  export class App extends Vue {
    mounted () {
      console.info('mounted!')
    }
  }
</script>
```
