<template>
  <div class="ch-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Layout",
    data() {
      return {
        layoutClass: {
          "is-vertical": false
        }
      };
    },
    mounted() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === "Aside") {
          this.layoutClass["is-vertical"] = true;
        }
      });
    }
  };
</script>

<style lang="scss">
  .ch-layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &.is-vertical {
      flex-direction: row;
    }
  }
</style>