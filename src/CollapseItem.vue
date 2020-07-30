<template>
  <div class="ch-collapse-item">
    <div class="header" @click="open=!open">
      {{ title }}
    </div>
    <div class="content" ref="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollapseItem",
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      open: {
        type: Boolean,
        default: false
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.ch-collapse-item {
  border-bottom: 1px solid #ebeef5;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  .header {
    height: 48px;
    display: flex;
    align-items: center;
  }

  .content {
    padding-bottom: 16px;
  }
}
</style>