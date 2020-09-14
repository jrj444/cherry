---
title: Tabs 标签页
---

# Tabs 标签页

选项卡切换标签组件

### 基础用法

基础简洁的标签页。

<TabsDemo></TabsDemo>

Tabs 组件提供了选项卡功能，给 `<ch-tab-item>` 和 `<ch-tab-pane>` 一个相同的 `name` 让标题和内容关联，同时 `selected` 必须指定为其中一个 `name` 来展示默认打开的选项

```vue
<ch-tabs selected="1">
  <ch-tabs-head>
    <ch-tabs-item name="1">Tab 1</ch-tabs-item>
    <ch-tabs-item name="2">Tab 2</ch-tabs-item>
    <ch-tabs-item name="3">Tab 3</ch-tabs-item>
  </ch-tabs-head>
  <ch-tabs-body>
    <ch-tabs-pane name="1">Content of Tab Pane 1</ch-tabs-pane>
    <ch-tabs-pane name="2">Content of Tab Pane 2</ch-tabs-pane>
    <ch-tabs-pane name="3">Content of Tab Pane 3</ch-tabs-pane>
  </ch-tabs-body>
</ch-tabs>
```

### 禁用选项和自定义标签页

<TabsExtra></TabsExtra>

使用 `disable` 定义禁用的选项，用具名的 `slot="actions"` 来自定义顶栏右部的内容 

```vue
<ch-tabs selected="1">
  <ch-tabs-head>
    <ch-tabs-item name="1">Tab 1</ch-tabs-item>
    <ch-tabs-item name="2" disabled>Tab 2</ch-tabs-item>
    <span slot="actions">
      <ch-button type="link" icon="link" icon-position="right">Go</ch-button>
    </span>
  </ch-tabs-head>
  <ch-tabs-body>
    <ch-tabs-pane name="1">Content of Tab Pane 1</ch-tabs-pane>
    <ch-tabs-pane name="2">Content of Tab Pane 2</ch-tabs-pane>
  </ch-tabs-body>
</ch-tabs>
```

### 属性

<TabsAttributes></TabsAttributes>

