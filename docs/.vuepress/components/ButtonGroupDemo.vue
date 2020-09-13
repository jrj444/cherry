<template>
  <div class="block">
    <div class="button-group">
      <ch-button-group class="group">
        <ch-button icon="left" type="primary">上一页</ch-button>
        <ch-button icon="right" icon-position="right" type="primary">下一页</ch-button>
      </ch-button-group>
      <ch-button-group class="group">
        <ch-button icon="edit"></ch-button>
        <ch-button icon="share"></ch-button>
        <ch-button icon="github"></ch-button>
      </ch-button-group>
    </div>
  </div>
</template>

<script>
import ButtonGroup from "../../../src/components/button/ButtonGroup";
import Button from "../../../src/components/button/Button";

export default {
  name: "ButtonGroupDemo",
  components: {
    "ch-button-group": ButtonGroup,
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

  .button-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .group {
      margin-right: 1em;
      @media (max-width: 850px) {
        margin: 0 1em 1em 0;
      }
    }
  }
}
</style>