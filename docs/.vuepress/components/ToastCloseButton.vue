<template>
  <div class="block">
    <ch-button type="primary" @click="hello">你好哇</ch-button>
  </div>
</template>

<script>
import Vue from 'vue';
import plugin from "../../../src/libs/plugin";
import Button from "../../../src/components/button/Button";

Vue.use(plugin);
export default {
  name: "ToastCloseButton",
  components: {
    "ch-button": Button
  },
  methods:{
    hello(){
      this.$toast('你好呀',{
        showClose:{
          text: "好的",
          callback: ()=>{
            console.log("好的");
          }
        }
      })
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
}
</style>