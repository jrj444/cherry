---
title: Input 输入框
---

# Input 输入框

通过鼠标或键盘输入内容

### 基础用法

<ClientOnly><InputDemo></InputDemo></ClientOnly>

通过 `vlaue` 指定输入框内容，`disabled` 指定是否禁用，`readonly` 指定为只读状态

```vue
<ch-input value="正常状态"></ch-input>
<ch-input disabled value="禁用状态"></ch-input>
<ch-input readonly value="只读状态"></ch-input>
```

### 双向绑定

数据支持双向绑定

<ClientOnly><InputDoubleSidedDemo></InputDoubleSidedDemo></ClientOnly>

```jsx
<ch-input v-model="input"></ch-input>
<div>
  input: {{ input }}
</div>

export default {
  data(){
    return {
      input: '24'
    }
  }
}
```

### 密码框

<ClientOnly><InputPassword></InputPassword></ClientOnly>

使用 `show-password` 属性，会得到一个可切换显示隐藏的密码框

```jsx
<ch-input placeholder="请输入密码" show-password v-model="input"></ch-input>

export default {
  data(){
    return {
      input: ''
    }
  }
}
```

### 属性

<InputAttributes></InputAttributes>


