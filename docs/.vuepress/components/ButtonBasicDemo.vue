<template>
  <div class="block">
    <div class="button-type">
      <ch-button>默认按钮</ch-button>
      <ch-button type="primary">主要按钮</ch-button>
      <ch-button type="success">成功按钮</ch-button>
      <ch-button type="warning">警告按钮</ch-button>
      <ch-button type="dangerous">危险按钮</ch-button>
    </div>
    <div class="button-icon">
      <ch-button icon="setting" circle></ch-button>
      <ch-button icon="email" type="primary" circle></ch-button>
      <ch-button icon="unlock" type="success" circle></ch-button>
      <ch-button icon="region" type="warning" circle></ch-button>
      <ch-button icon="edit" type="dangerous" circle></ch-button>
    </div>
  </div>
</template>

<script>
import Button from "../../../src/components/button/Button";

export default {
  name: "ButtonBasicDemo",
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

  .button-type {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > button {
      margin: 0 1em 1em 0;
    }
  }
}
</style>