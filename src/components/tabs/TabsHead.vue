<template>
  <div class="ch-tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      this.updateLinePosition(vm);
    });
  },
  methods: {
    updateLinePosition(selectedVm) {
      let {width, left} = selectedVm.$el.getBoundingClientRect();
      let {left: left2} = this.$refs.head.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - left2}px`;
    }
  }
};
</script>

<style lang="scss">
$tab-height: 40px;
$blue: #1890ff;
$border-color: #f0f0f0;
.ch-tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-color;

  > .line {
    position: absolute;
    bottom: -1px;
    border-bottom: 2px solid $blue;
    transition: all 250ms;
  }

  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>