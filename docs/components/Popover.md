---
title: Popover - 弹出框
---

# Popover 弹出框

点击或鼠标移入元素，弹出卡片浮层

### 使用方法

<ClientOnly><PopoverDemo></PopoverDemo></ClientOnly>

`trigger` 选择弹出方式为 click 或者 hover，`positon` 选择弹出框的方向位置

```vue
<ch-popover>
  <ch-button type="primary">Click Me</ch-button>
  <template slot="content">
    默认会在上方弹出
  </template>
</ch-popover>
<ch-popover position="left">
  <ch-button type="primary">Click Me</ch-button>
  <template slot="content">
    点击左边弹出
  </template>
</ch-popover>
<ch-popover trigger="hover" position="bottom">
  <ch-button type="primary">Hover Me</ch-button>
  <template slot="content">
    Hover触发 下方弹出
  </template>
</ch-popover>
<ch-popover trigger="hover" position="right">
  <ch-button type="primary">Hover Me</ch-button>
  <template slot="content">
    Hover触发 右边弹出
  </template>
</ch-popover>
```

### 属性

<PopoverAttributes></PopoverAttributes>