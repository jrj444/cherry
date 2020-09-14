<template>
  <div class="block">
    <div class="input-display">
      <ch-input value="正常状态"></ch-input>
      <ch-input disabled value="禁用状态"></ch-input>
      <ch-input readonly value="只读状态"></ch-input>
    </div>
  </div>
</template>

<script>
import Input from "../../../src/components/Input";

export default {
  name: "InputDemo",
  components: {
    "ch-input": Input
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

  .input-display {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    > .ch-input-wrapper {
      margin:0 56px 10px 0;
    }
  }
}
</style>