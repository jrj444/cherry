<template>
  <div class="ch-collapse">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "Collapse",
  props: {
    single: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.ch-collapse {
  border-top: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
}
</style>