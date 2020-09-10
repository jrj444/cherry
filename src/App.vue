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
    <hr>
    <ch-collapse single>
      <ch-collapse-item title="标题1">
        与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
        在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
      </ch-collapse-item>
      <ch-collapse-item title="标题2">
        控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
        页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
      </ch-collapse-item>
      <ch-collapse-item title="标题3">
        简化流程：设计简洁直观的操作流程；
        清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
        帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
      </ch-collapse-item>
    </ch-collapse>
    <hr>
    <ch-popover>
      <ch-button type="primary">上方弹出</ch-button>
      <template slot="content">
        上方弹出内容
      </template>
    </ch-popover>
    <ch-popover position="bottom">
      <ch-button type="primary">下方弹出</ch-button>
      <template slot="content">
        下防弹出内容
      </template>
    </ch-popover>
    <hr>
    <ch-input placeholder="基本用法"></ch-input>
    <ch-input disabled placeholder="禁用"></ch-input>
    <ch-input error="错误信息"></ch-input>
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
    "ch-tabs-pane": TabsPane,
    "ch-collapse": Collapse,
    "ch-collapse-item": CollapseItem,
    "ch-popover": Popover,
  },
  data() {
    return {
      value: true,
      show: false
    };
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
</style>
