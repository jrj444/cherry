---
title: Toast - 消息提示
---

# Toast 消息提示

全局展示操作反馈信息

### 基础用法

从顶部、中间或者底部出现，3 秒后会自动消失

<ClientOnly><ToastDemo></ToastDemo></ClientOnly>

我在 Vue.prototype 上注册了 `$toast` 用于调用。它接收两个参数，分别是 `message` 消息内容 和 `toastOptions` 字面量参数

::: tip
`toastOptions` 是一个对象参数，可以 Toast 的相关参数，包括持续时间 `duration`、弹出位置 `positon` 等 
:::


```vue
<ch-button type="primary" @click="topOpen">顶部弹出</ch-button>
<ch-button type="primary" @click="middleOpen">中间弹出</ch-button>
<ch-button type="primary" @click="bottomOpen">底部弹出</ch-button>

<script>
export default {
  methods: {
    topOpen() {
      this.$toast('这是一条顶部的消息提示',{
        duration: 5000
      });
    },
    middleOpen() {
      this.$toast('这是一条中间的消息提示', {
        position: 'middle'
      });
    },
    bottomOpen() {
      this.$toast('这是一条底部的消息提示', {
        position: 'bottom'
      });
    }
  }
}
</script>
```

### 设置关闭

Toast 默认自带关闭的文本按钮，这里你可以自定义关闭按钮的文本

<ClientOnly><ToastCloseButton></ToastCloseButton></ClientOnly>

使用 `showClose` 来定义关闭按钮，关闭按钮还可以添加一个回调函数

```vue
<ch-button type="primary" @click="hello">你好哇</ch-button>

<script>
export default {
  methods:{
    hello(){
      this.$toast('你好呀',{
        showClose:{
          text: "好的",
          callback: ()=>{
            console.log("好的");
          }
        }
      })
    }
  }
}
</script>
```

### 使用 HTML

`message` 支持传入 HTML 片段

<ClientOnly><ToastUseHtml></ToastUseHtml></ClientOnly>

将 `useHtml` 设置为 true，`message` 就会被当作 HTML 来处理

```vue
<ch-button type="primary" @click="useHtml">使用 HTML</ch-button>

<script>
export default {
  methods: {
    useHtml() {
      this.$toast(
          '<strong>这是 <i style="color: red;">HTML</i> 片段</strong>',{
            useHtml: true
      });
    }
  }
}
</script>
```

### 属性

<ToastAttributes></ToastAttributes>