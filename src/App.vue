<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ch-button>按钮</ch-button>
  </div>
</template>

<script>

import Button from "@/components/button/Button";

export default {
  name: 'App',
  components:{
    "ch-button": Button
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
