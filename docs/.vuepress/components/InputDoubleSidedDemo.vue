<template>
  <div class="block">
    <ch-input v-model="input"></ch-input>
    <div class="input">
      input: {{ input }}
    </div>
  </div>
</template>

<script>
import Input from "../../../src/components/Input";

export default {
  name: "InputDemo",
  components: {
    "ch-input": Input
  },
  data() {
    return {
      input: "24"
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

  .input {
    margin-top: 10px;
  }
}
</style>