<template>
  <div class="block">
    <ch-switch v-model="value"></ch-switch>
  </div>
</template>

<script>
import SwitchBtn from "../../../src/components/SwitchBtn";

export default {
  name: "SwitchDemo",
  components: {
    "ch-switch": SwitchBtn
  },
  data() {
    return {
      value: true
    };
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