<template>
  <div class="ch-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Content"
  };
</script>

<style lang="scss" scoped>
  .ch-content {
    flex-grow: 1;
  }
</style>