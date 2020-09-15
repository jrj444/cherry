<template>
  <div class="block">
    <ch-button type="primary" @click="useHtml">使用 HTML</ch-button>
  </div>
</template>

<script>
import Vue from 'vue';
import plugin from "../../../src/libs/plugin";
import Button from "../../../src/components/button/Button";

Vue.use(plugin);
export default {
  name: "ToastUseHtml",
  components: {
    "ch-button": Button
  },
  methods: {
    useHtml() {
      this.$toast(
          '<strong>这是 <i style="color: red;">HTML</i> 片段</strong>',
          {
            useHtml: true
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
}
</style>