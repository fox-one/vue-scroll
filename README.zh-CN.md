# @foxone/vue-scroll

[English](./README.md) | 简体中文

[示例](https://fox-one.github.io/vue-scroll/)

## 快速开始
### 安装
```shell
npm i -S @foxone/vue-scroll
# 或者
yarn add @foxone/vue-scroll
# 或者
pnpm i -S @foxone/vue-scroll
```

### 使用
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

## 开发
对于调试或维护，可以将项目 clone 到本地，然后启动项目。

```shell
git clone --depth 1

yarn && yarn dev
```

[更多详情](./DEV.zh-CN.md)
