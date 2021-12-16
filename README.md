# @foxone/vue-scroll

English | [简体中文](./README.zh-CN.md)

[Demo](https://fox-one.github.io/vue-scroll/)

## Quick start
### Install
```shell
npm i -S @foxone/vue-scroll
# or
yarn add @foxone/vue-scroll
# or
pnpm i -S @foxone/vue-scroll
```

### Usage
```js
import Vue from "vue";
import Scroll from '@foxone/vue-scroll';
import "@foxone/vue-scroll/es/index.css";

Vue.use(Scroll);
```

```jsx
<f-scroll
  :data="data"
  :pulldown="true"
  :pullup="true"
  @pulldown="loadData(true)"
  @pullup="loadData"
>
  <section>
    <div v-for="(item, ind) in data" :key="item.id || ind">
      {{ item.name }}
    </div>
  </section>
</f-scroll>
```
## Dev
For debugging or maintenance, you can clone the whole git repository and run the project:

```shell
git clone --depth 1

yarn && yarn dev
```

[More Detials](./DEV.md)
