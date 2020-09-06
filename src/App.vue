<template>
  <div id="app">
    <ch-button type="primary" icon="setting" icon-position="right">主要按钮</ch-button>
    <ch-button>默认按钮</ch-button>
    <ch-button type="text">文本按钮</ch-button>
    <ch-button type="link">链接按钮</ch-button>
    <hr>
    <ch-button size="large">大按钮</ch-button>
    <ch-button>正常按钮</ch-button>
    <ch-button size="small">小按钮</ch-button>
    <hr>
    <ch-button type="success">成功</ch-button>
    <ch-button type="warning">警告</ch-button>
    <ch-button type="dangerous">危险</ch-button>
    <hr>
    <ch-switch></ch-switch>
  </div>
</template>

<script>

import Button from "@/components/button/Button";
import Toast from "@/components/Toast";
import Input from "@/components/Input";
import Switch from "@/components/Switch";

export default {
  name: 'App',
  components: {
    "ch-button": Button,
    name: Toast,
    "ch-input": Input,
    "ch-switch": Switch
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
