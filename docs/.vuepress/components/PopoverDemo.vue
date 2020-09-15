<template>
  <div class="block">
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
  </div>
</template>

<script>
import Popover from "../../../src/components/Popover";
import Button from "../../../src/components/button/Button";

export default {
  name: "PopoverDemo",
  components: {
    "ch-popover": Popover,
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

  .ch-popover {
    margin: 10px;
  }
}
</style>