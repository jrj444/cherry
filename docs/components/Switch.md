---
title: Switch 开关
---

# Switch 开关

表示两种相互对立的状态间的切换

### 基础用法

<ClientOnly><SwitchDemo></SwitchDemo></ClientOnly>

绑定 `v-model` 到一个 `Boolean` 类型的变量

```vue
<ch-switch v-model="value"></ch-switch>

<script>
export default {
  data() {
    return {
      value: true
    };
  }
}
</script>
```

### 禁用状态

<ClientOnly><SwitchDisabled></SwitchDisabled></ClientOnly>

设置 `disabled` 属性为 `true`即可禁用

```vue
<ch-switch v-model="value1" disabled></ch-switch>
<ch-switch v-model="value2" disabled></ch-switch>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: false
    };
  }
}
</script>
```

### 属性

<SwitchAttributes></SwitchAttributes>