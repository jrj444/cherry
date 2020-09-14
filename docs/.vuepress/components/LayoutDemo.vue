<template>
  <div class="block">
    <ch-layout>
      <ch-header>Header</ch-header>
      <ch-content>Content</ch-content>
      <ch-footer>Footer</ch-footer>
    </ch-layout>
    <hr>
    <ch-layout>
      <ch-header>Header</ch-header>
      <ch-layout>
        <ch-aside>Aside</ch-aside>
        <ch-content>Content</ch-content>
      </ch-layout>
      <ch-footer>Footer</ch-footer>
    </ch-layout>
    <hr>
    <ch-layout>
      <ch-aside>Aside</ch-aside>
      <ch-layout>
        <ch-header>Header</ch-header>
        <ch-content>Content</ch-content>
        <ch-footer>Footer</ch-footer>
      </ch-layout>
    </ch-layout>
  </div>
</template>

<script>
import Layout from "../../../src/components/layout/Layout";
import Header from "../../../src/components/layout/Header";
import Content from "../../../src/components/layout/Content";
import Aside from "../../../src/components/layout/Aside";
import Footer from "../../../src/components/layout/Footer";

export default {
  name: "LayoutDemo",
  components: {
    "ch-layout": Layout,
    "ch-header": Header,
    "ch-content": Content,
    "ch-aside": Aside,
    "ch-footer": Footer
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

  .ch-header, .ch-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .ch-content {
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .ch-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 160px;
    width: 100px;
  }

  :last-child {
    >.ch-aside{
      line-height: 280px;
    }
  }
}
</style>