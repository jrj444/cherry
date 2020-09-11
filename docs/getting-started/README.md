---
title: 快速开始
---

# 快速开始

## 安装

```shell script
npm install cherry-ui-vue
```

或

```shell script
yarn add cherry-ui-vue
```

## 开始使用

```javascript
import {Button} from 'cherry-ui-vue'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'ch-button': Button
  }
})
```