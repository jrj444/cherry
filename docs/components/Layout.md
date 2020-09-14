---
title: Layout 布局
---

# Layout 布局

用于布局的容器组件，协助进行页面级整体布局

`<ch-layout>`：最外层容器，默认垂直排列，当子元素含有 `<ch-aside>` 时，则子元素会水平排列

`<ch-header>`：头部顶栏容器

`<ch-aside>`：侧边栏容器

`<ch-content>`：主内容容器

`<ch-footer>`：底部底栏容器

::: tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。而且，`<ch-layout>` 里面可以嵌套 `<ch-layou>` 以改变排列方向插入合适的边栏。但是后面四个元素的父元素就只能是 `<ch-layout>`
:::

### 使用方法

<LayoutDemo></LayoutDemo>

灵活运用 `<ch-layout>` 嵌套的方法，放置各个容器组件的位置

```vue
<ch-layout>
  <ch-header>Header</ch-header>
  <ch-content>Content</ch-content>
  <ch-footer>Footer</ch-footer>
</ch-layout>
<hr>
<ch-layout>
  <ch-header>Header</ch-header>
  <ch-layout>
    <ch-aside>Aside</ch-aside>
    <ch-content>Content</ch-content>
  </ch-layout>
  <ch-footer>Footer</ch-footer>
</ch-layout>
<hr>
<ch-layout>
  <ch-aside>Aside</ch-aside>
  <ch-layout>
    <ch-header>Header</ch-header>
    <ch-content>Content</ch-content>
    <ch-footer>Footer</ch-footer>
  </ch-layout>
</ch-layout>

<style lang="scss">
.ch-header, .ch-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.ch-content {
  background-color: #f0f0f0;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.ch-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 160px;
  width: 100px;
}
:last-child {
  >.ch-aside{
    line-height: 280px;
  }
}
</style>
```