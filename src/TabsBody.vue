<template>
  <div class="ch-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabsBody",
    inject: ["eventBus"]
  };
</script>

<style lang="scss" scoped>
  .ch-tabs-body{

  }
</style>