<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ch-button icon="setting" @click="showToast">按钮</ch-button>
    <ch-input></ch-input>
    <ch-icon name="error"></ch-icon>
  </div>
</template>

<script>

import Button from "@/components/button/Button";
import Toast from "@/components/Toast";
import Input from "@/components/Input";

export default {
  name: 'App',
  components: {
    "ch-button": Button,
    name: Toast,
    "ch-input": Input,
  },
  methods: {
    showToast() {
      this.$toast('这是一个toast', {
        duration: 5000,
        position: 'bottom'
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
