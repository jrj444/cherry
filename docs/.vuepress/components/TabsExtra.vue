<template>
  <div class="block">
    <ch-tabs selected="1">
      <ch-tabs-head>
        <ch-tabs-item name="1">Tab 1</ch-tabs-item>
        <ch-tabs-item name="2" disabled>Tab 2</ch-tabs-item>
        <span slot="actions"><ch-button type="link" icon="link" icon-position="right">Go</ch-button></span>
      </ch-tabs-head>
      <ch-tabs-body>
        <ch-tabs-pane name="1">Content of Tab Pane 1</ch-tabs-pane>
        <ch-tabs-pane name="2">Content of Tab Pane 2</ch-tabs-pane>
      </ch-tabs-body>
    </ch-tabs>
  </div>
</template>

<script>
import Tabs from "../../../src/components/tabs/Tabs";
import TabsBody from "../../../src/components/tabs/TabsBody";
import TabsHead from "../../../src/components/tabs/TabsHead";
import TabsPane from "../../../src/components/tabs/TabsPane";
import TabsItem from "../../../src/components/tabs/TabsItem";
import Button from "../../../src/components/button/Button";

export default {
  name: "TabsDemo",
  components: {
    "ch-tabs": Tabs,
    "ch-tabs-head": TabsHead,
    "ch-tabs-body": TabsBody,
    "ch-tabs-pane": TabsPane,
    "ch-tabs-item": TabsItem,
    "ch-button": Button
  }
};
</script>

<style lang="scss" scoped>
.block {
  border: 1px solid #eaecef;
  border-radius: 3px;
  padding: 24px;
  transition: all .3s;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}
</style>