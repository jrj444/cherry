<template>
  <div class="block">
    <ch-switch v-model="value1" disabled></ch-switch>
    <ch-switch v-model="value2" disabled></ch-switch>
  </div>
</template>

<script>
import SwitchBtn from "../../../src/components/SwitchBtn";

export default {
  name: "SwitchDisabled",
  components: {
    "ch-switch": SwitchBtn
  },
  data() {
    return {
      value1: true,
      value2: false
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
  .ch-switch:not(:last-child){
    margin-right: 20px;
  }
}
</style>