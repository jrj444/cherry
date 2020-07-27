<template>
  <div class="ch-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabsBody",
    inject: ["eventBus"],
    created() {
      this.eventBus.$on("update:selected", (name) => {
        this.active = name === this.name;
      });
    }
  };
</script>

<style lang="scss" scoped>
  .ch-tabs-body {

  }
</style>