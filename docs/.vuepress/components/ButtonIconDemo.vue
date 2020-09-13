<template>
  <div class="block">
    <div class="button-icon">
      <ch-button icon="edit"></ch-button>
      <ch-button icon="share"></ch-button>
      <ch-button icon="github"></ch-button>
      <ch-button icon="search">搜索</ch-button>
      <ch-button icon="download" icon-position="right">下载</ch-button>
      <ch-button loading type="primary">加载中</ch-button>
    </div>
  </div>
</template>

<script>
import Button from "../../../src/components/button/Button";

export default {
  name: "ButtonDisableDemo",
  components: {
    "ch-button": Button
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

  .button-icon {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > button {
      margin: 0 1em 0 0;
      @media (max-width: 850px) {
        margin: 0 1em 1em 0;
      }
    }
  }
}
</style>