<template>
  <div class="ch-tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabsHead",
    inject: ["eventBus"]
  };
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  .ch-tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;

    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>