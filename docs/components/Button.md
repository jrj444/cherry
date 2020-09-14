---
title: Button 按钮
---

# Button 按钮

一些常用的操作按钮

### 基础用法

基础的按钮用法

<ButtonBasicDemo></ButtonBasicDemo>

使用 `type`、`circle` 来定义 Button 的样式

```vue
<ch-button>默认按钮</ch-button>
<ch-button type="primary">主要按钮</ch-button>
<ch-button type="success">成功按钮</ch-button>
<ch-button type="warning">警告按钮</ch-button>
<ch-button type="dangerous">危险按钮</ch-button>

<ch-button icon="setting" circle></ch-button>
<ch-button icon="email" type="primary" circle></ch-button>
<ch-button icon="unlock" type="success" circle></ch-button>
<ch-button icon="region" type="warning" circle></ch-button>
<ch-button icon="edit" type="dangerous" circle></ch-button>
```

### 禁用状态

按钮为不可用的状态

<ButtonDisableDemo></ButtonDisableDemo>

使用 `disabled` 属性来定义按钮是否可用，它接受一个 `Boolean` 值。

```vue
<ch-button disabled>默认按钮</ch-button>
<ch-button type="primary" disabled>主要按钮</ch-button>
<ch-button type="success" disabled>成功按钮</ch-button>
<ch-button type="warning" disabled>警告按钮</ch-button>
<ch-button type="dangerous" disabled>危险按钮</ch-button>
```

### 文字按钮

没有边框和背景色的按钮，有 `text` 和 `link` 两种形式

<ButtonTextDemo></ButtonTextDemo>

同样，使用 `type` 来定义这两种样式的按钮

```vue
<ch-button type="text">文字按钮</ch-button>
<ch-button type="text" disabled>文字按钮</ch-button>
<ch-button type="link">链接按钮</ch-button>
<ch-button type="link" disabled>链接按钮</ch-button>
```

### 图标按钮

按钮可以附带图标，或者使用只有图标的按钮

<ButtonIconDemo></ButtonIconDemo>

使用 `icon` 属性即可，还可以用 `icon-positon` 来设置图标的左右位置

此外，使用 `loading` 可以在按钮上显示加载状态

```vue
<ch-button icon="edit"></ch-button>
<ch-button icon="share"></ch-button>
<ch-button icon="github"></ch-button>
<ch-button icon="search">搜索</ch-button>
<ch-button icon="download" icon-position="right">下载</ch-button>
<ch-button loading type="primary">加载中</ch-button>
```

### 按钮组

以按钮组的方式出现，用于需要多个按钮组合的情况

<ButtonGroupDemo></ButtonGroupDemo>

使用 `<ch-button-group>` 标签来嵌套里面的 `<ch-button>`

```vue
<ch-button-group>
  <ch-button icon="left" type="primary">上一页</ch-button>
  <ch-button icon="right" icon-position="right" type="primary">下一页</ch-button>
</ch-button-group>
<ch-button-group>
  <ch-button icon="edit"></ch-button>
  <ch-button icon="share"></ch-button>
  <ch-button icon="github"></ch-button>
</ch-button-group>
```

### 属性

<ButtonAttributesDemo></ButtonAttributesDemo>