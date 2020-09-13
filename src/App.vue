<template>
  <div id="app">
    <ch-button type="primary" icon="user" circle icon-position="right"></ch-button>
    <ch-button icon="email" type="primary"></ch-button>
    <ch-button type="primary">信息按钮</ch-button>
    <ch-button>普通按钮</ch-button>
    <ch-button icon="search">搜索按钮</ch-button>
    <hr>
    <ch-button disabled>默认按钮</ch-button>
    <ch-button disabled type="primary">主要按钮</ch-button>
    <ch-button disabled type="success">成功按钮</ch-button>
    <ch-button disabled type="warning">警告按钮</ch-button>
    <ch-button disabled type="dangerous">危险按钮</ch-button>
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
* {
  box-sizing: border-box;
}
</style>
