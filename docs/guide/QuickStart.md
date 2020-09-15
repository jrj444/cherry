---
title: 快速开始
---

# 快速开始

### 浏览器支持

组件中使用的 Vue 版本为 `2.6.11`，并且全部组件均采用了 `felx` 布局方式

请确保在使用组件的过程兼容您的浏览器

### 引入 Cherry

在 `main.js` 中按需引入组件，比如 Button

```js
import Vue from 'vue';
import {Button} from '@jrj444/cherry-ui';
import '@jrj444/cherry-ui/dist/cherry.css'
import App from './App.vue';

Vue.component("ch-button", Button);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

这样就可以以 `<ch-button>` 的标签形式，在项目中使用 Button 组件啦

需要注意的是，样式文件 `cherry.css` 需要单独引入

下面是完整的组件列表和注册方式

::: details 查看代码
```js
import Vue from 'vue';
import {
  Button,
  Button,
  Icon,
  ButtonGroup,
  Input,
  Col,
  Row,
  Layout,
  Header,
  Footer,
  Aside,
  Content,
  Toast,
  Plugin,
  Tabs,
  TabsHead,
  TabsBody,
  TabsItem,
  TabsPane,
  Popover,
  Collapse,
  CollapseItem,
  SwitchBtn
} from '@jrj444/cherry-ui';

Vue.component('ch-button', Button)
Vue.component('ch-icon', Icon)
Vue.component('ch-button-group', ButtonGroup)
Vue.component('ch-input', Input)
Vue.component('ch-row',Row)
Vue.component('ch-col',Col)
Vue.component('ch-layout',Layout)
Vue.component('ch-header',Header)
Vue.component('ch-sider',Sider)
Vue.component('ch-content',Content)
Vue.component('ch-footer',Footer)
Vue.use(Plugin)                           // toast 组件用到的插件方法
Vue.component('ch-tabs',Tabs)
Vue.component('ch-tabs-head',TabsHead)
Vue.component('ch-tabs-body',TabsBody)
Vue.component('ch-tabs-item',TabsItem)
Vue.component('ch-tabs-pane',TabsPane)
Vue.component('ch-popover',Popover)
Vue.component('ch-collapse',Collapse)
Vue.component('ch-collapse-item',CollapseItem)
Vue.component('ch-switch', SwitchBtn)
```
:::




