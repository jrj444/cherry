<template>
  <div class="block">
    <ch-button type="primary" @click="topOpen">顶部弹出</ch-button>
    <ch-button type="primary" @click="middleOpen">中间弹出</ch-button>
    <ch-button type="primary" @click="bottomOpen">底部弹出</ch-button>
  </div>
</template>

<script>
import Vue from 'vue';
import plugin from "../../../src/libs/plugin";
import Button from "../../../src/components/button/Button";

Vue.use(plugin);
export default {
  name: "ToastDemo",
  components: {
    "ch-button": Button
  },
  methods: {
    topOpen() {
      this.$toast('这是一条顶部的消息提示',{
        duration: 5000
      });
    },
    middleOpen() {
      this.$toast('这是一条中间的消息提示', {
        position: 'middle'
      });
    },
    bottomOpen() {
      this.$toast('这是一条底部的消息提示', {
        position: 'bottom'
      });
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

  .ch-button {
    margin: 10px;
  }
}
</style>