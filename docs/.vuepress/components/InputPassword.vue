<template>
  <div class="block">
    <ch-input placeholder="请输入密码" show-password v-model="input"></ch-input>
  </div>
</template>

<script>
import Input from "../../../src/components/Input";

export default {
  name: "InputDemo",
  components: {
    "ch-input": Input
  },
  data(){
    return {
      input: ""
    }
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