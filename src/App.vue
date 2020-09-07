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
    <ch-switch v-model="value"></ch-switch>
    <ch-switch :value="true" disabled></ch-switch>
    <hr>
    <ch-tabs selected="1" direction="vertical">
      <ch-tabs-head>
        <ch-tabs-item name="1">足球</ch-tabs-item>
        <ch-tabs-item name="2">篮球</ch-tabs-item>
        <ch-tabs-item name="3">网球</ch-tabs-item>
      </ch-tabs-head>
      <ch-tabs-body>
        <ch-tabs-pane name="1">哈哈哈</ch-tabs-pane>
        <ch-tabs-pane name="2">篮球</ch-tabs-pane>
      </ch-tabs-body>
    </ch-tabs>
  </div>
</template>

<script>

import Button from "@/components/button/Button";
import Toast from "@/components/Toast";
import Input from "@/components/Input";
import Switch from "@/components/SwitchBtn";
import Tabs from "@/components/tabs/Tabs";
import TabsBody from "@/components/tabs/TabsBody";
import TabsHead from "@/components/tabs/TabsHead";
import TabsItem from "@/components/tabs/TabsItem";
import TabsPane from "@/components/tabs/TabsPane";

export default {
  name: 'App',
  components: {
    "ch-button": Button,
    name: Toast,
    "ch-input": Input,
    "ch-switch": Switch,
    "ch-tabs": Tabs,
    "ch-tabs-body": TabsBody,
    "ch-tabs-head": TabsHead,
    "ch-tabs-item": TabsItem,
    "ch-tabs-pane": TabsPane
  },
  data() {
    return {
      value: true
    };
  }
};
</script>

<style lang="scss">
</style>
