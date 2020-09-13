<template>
  <div class="ch-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "ButtonGroup",
    mounted() {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase();
        if (name !== "button") {
          console.warn(`注意：ch-button-group 内的子元素应该全是 ch-button，但是你写的是 ${name}，这样会影响组件的样式，请不要这样使用。`);
        }
      }
    }
  };
</script>

<style lang="scss">
  .ch-button-group {
    display: inline-flex;
    vertical-align: middle;

    > .ch-button {
      border-radius: 0;

      &:not(:first-child) {
        margin-left: -1px;
      }

      &:first-child {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }

      &:last-child {
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }

      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>