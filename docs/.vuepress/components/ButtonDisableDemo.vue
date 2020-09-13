<template>
  <div class="block">
    <div class="button-disable">
      <ch-button disabled>默认按钮</ch-button>
      <ch-button type="primary" disabled>主要按钮</ch-button>
      <ch-button type="success" disabled>成功按钮</ch-button>
      <ch-button type="warning" disabled>警告按钮</ch-button>
      <ch-button type="dangerous" disabled>危险按钮</ch-button>
    </div>
  </div>
</template>

<script>
import Button from "../../../src/components/button/Button";

export default {
  name: "ButtonDisableDemo",
  components: {
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

  .button-disable {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > button {
      margin: 0 1em 0 0;
      @media (max-width: 900px) {
        margin: 0 1em 1em 0;
      }
    }
  }

}
</style>