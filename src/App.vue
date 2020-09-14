<template>
  <div id="app">
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
import Collapse from "@/components/collapse/Collapse";
import CollapseItem from "@/components/collapse/CollapseItem";
import Popover from "@/components/Popover";
import Icon from "@/components/Icon";


export default {
  name: 'App',
  components: {
    Icon,
    "ch-button": Button,
    name: Toast,
    "ch-input": Input,
    "ch-switch": Switch,
    "ch-tabs": Tabs,
    "ch-tabs-body": TabsBody,
    "ch-tabs-head": TabsHead,
    "ch-tabs-item": TabsItem,
    "ch-tabs-pane": TabsPane,
    "ch-collapse": Collapse,
    "ch-collapse-item": CollapseItem,
    "ch-popover": Popover,
  },
  data() {
    return {
      value: true,
      show: false,
      message: "hi"
    };
  }
};
</script>

<style lang="scss">
</style>
