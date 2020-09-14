---
title: Grid 栅格
---

# Grid 栅格

通过基础的 24 分栏，迅速简便地创建布局

- 通过 `row` 在水平方向建立一组 `col` （ column 的简写）

- 内容应当放置于 `col` 内，且只有 `col` 可以作为 `row` 的直接元素

- 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围

### 基础布局

使用单一分栏创建基础的栅格布局

<GridDemo></GridDemo>

通过 Row 和 Col 组件，并通过 Col 组件的 `span` 属性可以自由地组合布局

```vue
<ch-row>
  <ch-col span="24"><div class="grid-content bg-green-dark"></div></ch-col>
</ch-row>
<ch-row>
  <ch-col span="12"><div class="grid-content bg-green"></div></ch-col>
  <ch-col span="12"><div class="grid-content bg-green-light"></div></ch-col>
</ch-row>
<ch-row>
  <ch-col span="8"><div class="grid-content bg-green"></div></ch-col>
  <ch-col span="8"><div class="grid-content bg-green-light"></div></ch-col>
  <ch-col span="8"><div class="grid-content bg-green"></div></ch-col>
</ch-row>
<ch-row>
  <ch-col span="6"><div class="grid-content bg-green"></div></ch-col>
  <ch-col span="6"><div class="grid-content bg-green-light"></div></ch-col>
  <ch-col span="6"><div class="grid-content bg-green"></div></ch-col>
  <ch-col span="6"><div class="grid-content bg-green-light"></div></ch-col>
</ch-row>
<ch-row>
  <ch-col span="4"><div class="grid-content bg-green"></div></ch-col>
  <ch-col span="4"><div class="grid-content bg-green-light"></div></ch-col>
  <ch-col span="4"><div class="grid-content bg-green"></div></ch-col>
  <ch-col span="4"><div class="grid-content bg-green-light"></div></ch-col>
  <ch-col span="4"><div class="grid-content bg-green"></div></ch-col>
  <ch-col span="4"><div class="grid-content bg-green-light"></div></ch-col>
</ch-row>

<style lang="scss">
.ch-row { margin-bottom: 20px; &:last-child { margin-bottom: 0; } }
.bg-green { background: #b7eb8f; }
.bg-green-light { background: #d9f7be; }
.bg-green-dark { background: #95de64; }
.grid-content { border-radius: 2px; min-height: 36px; }
</style>
```

### 分栏间隔

各分栏之间可以存在间隔

<GridGutterDemo></GridGutterDemo>

Row 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。

```vue
<ch-row gutter="20">
  <ch-col span="8"><div class="grid-content bg-green"></div></ch-col>
  <ch-col span="8"><div class="grid-content bg-green-light"></div></ch-col>
  <ch-col span="8"><div class="grid-content bg-green"></div></ch-col>
</ch-row>
<ch-row gutter="20">
  <ch-col span="6"><div class="grid-content bg-green"></div></ch-col>
  <ch-col span="6"><div class="grid-content bg-green-light"></div></ch-col>
  <ch-col span="6"><div class="grid-content bg-green"></div></ch-col>
  <ch-col span="6"><div class="grid-content bg-green-light"></div></ch-col>
</ch-row>
```

### 分栏偏移

可以指定偏移的栏数

<GridOffsetDemo></GridOffsetDemo>

通过制定 Col 组件的 `offset` 属性可以指定分栏偏移的栏数。

```vue
<ch-row>
  <ch-col span="6" offset="6"><div class="grid-content bg-green"></div></ch-col>
  <ch-col span="6" offset="6"><div class="grid-content bg-green"></div></ch-col>
</ch-row>
<ch-row>
  <ch-col span="6"><div class="grid-content bg-green"></div></ch-col>
  <ch-col span="6" offset="6"><div class="grid-content bg-green"></div></ch-col>
</ch-row>
<ch-row>
  <ch-col span="12" offset="6"><div class="grid-content bg-green"></div></ch-col>
</ch-row>
```

### 响应式布局

预设了五个响应式尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`

<GridResponsiveDemo></GridResponsiveDemo>

`xs`、`sm`、`md`、`lg` 和 `xl` 接收一个对象为参数，如：`{span: 4, offset: 4}`

```vue
<ch-row gutter="10">
  <ch-col :xs="{span:8}" :sm="{span:6}" :md="{span:4}" :lg="{span:3}" :xl="{span:2}">
     <div class="grid-content bg-green"></div>
  </ch-col>
  <ch-col :xs="{span:4}" :sm="{span:6}" :md="{span:8}" :lg="{span:9}" :xl="{span:10}">
     <div class="grid-content bg-green-light"></div>
</ch-col>
  <ch-col :xs="{span:4}" :sm="{span:6}" :md="{span:8}" :lg="{span:9}" :xl="{span:10}">
    <div class="grid-content bg-green"></div>
  </ch-col>
  <ch-col :xs="{span:8}" :sm="{span:6}" :md="{span:4}" :lg="{span:3}" :xl="{span:2}">
    <div class="grid-content bg-green-light"></div>
  </ch-col>
</ch-row>
<ch-row gutter="10">
  <ch-col :xs="{span:2}" :sm="{span:4}" :md="{span:6}" :lg="{span:8}" :xl="{span:10}">
    <div class="grid-content bg-green"></div>
  </ch-col>
  <ch-col :xs="{span:20}" :sm="{span:16}" :md="{span:12}" :lg="{span:8}" :xl="{span:4}">
    <div class="grid-content bg-green-light"></div>
  </ch-col>
  <ch-col :xs="{span:2}" :sm="{span:4}" :md="{span:6}" :lg="{span:8}" :xl="{span:10}">
    <div class="grid-content bg-green"></div>
  </ch-col>
</ch-row>
```

### Row 属性

<GridRowAttributes></GridRowAttributes>

### Col 属性

<GridColAttributes></GridColAttributes>


