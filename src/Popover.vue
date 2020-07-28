<template>
  <div class="ch-popover" @click.stop="onClick">
    <div class="content" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Popover",
    data() {
      return {
        visible: false
      };
    },
    methods: {
      onClick() {
        this.visible = !this.visible;
        this.$nextTick(() => {
          let eventHandler = () => {
            this.visible = false;
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .ch-popover {
    display: inline-block;
    vertical-align: top;
    position: relative;

    .content {
      position: absolute;
      bottom: 100%;
      left: 0;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
  }
</style>