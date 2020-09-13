<template>
  <div>
    <div class="icon-demo">
      <ch-icon name="setting"></ch-icon>
      <ch-icon name="share"></ch-icon>
      <ch-icon name="edit"></ch-icon>
      <ch-icon name="github"></ch-icon>
      <ch-button type="primary" icon="search">搜索</ch-button>
    </div>
  </div>
</template>

<script>
import Icon from "../../../src/components/Icon";
import Button from "../../../src/components/button/Button";

export default {
  name: "IconDemo",
  components: {
    "ch-icon": Icon,
    "ch-button": Button
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="scss" scoped>
.icon-demo {
  border: 1px solid #eaecef;
  border-radius: 3px;
  padding: 24px;
  display: flex;
  align-items: center;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(232, 237, 250,0.6);
  }

  > svg {
    width: 24px;
    height: 24px;
    margin-right: 20px;
  }

  > button {
    font-size: 14px;
  }
}
</style>