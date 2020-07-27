<template>
  <div class="ch-tabs-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabsItem",
    props: {
      disabled: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style lang="scss" scoped>
  .ch-tabs-item {
  }
</style>