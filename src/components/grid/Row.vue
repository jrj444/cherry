<template>
  <div class="ch-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Row",
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      default: "left",
      validator(value) {
        return ["left", "right", "center"].includes(value);
      }
    }
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px"
      };
    },
    rowClass() {
      return [this.align && `align-${this.align}`];
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  }
};
</script>

<style lang="scss">
.ch-row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

  &.align-left {
    justify-content: flex-start;
  }

  &.align-right {
    justify-content: flex-end;
  }

  &.align-center {
    justify-content: center;
  }
}
</style>