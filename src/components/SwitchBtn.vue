<template>
  <button class="ch-switch" :class="{'ch-switch-checked':value, 'ch-switch-disabled':disabled}" @click="toggle">
    <span></span>
  </button>
</template>

<script>
export default {
  name: "SwitchBtn",
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle() {
      if (!this.disabled) {
        this.$emit('input', !this.value);
      }
    }
  }
};
</script>

<style lang="scss">
.ch-switch {
  height: 22px;
  width: 44px;
  border: none;
  background: #bfbfbf;
  border-radius: 11px;
  position: relative;
  outline: none;
  cursor: pointer;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: 18px;
    width: 18px;
    background: #fff;
    border-radius: 9px;
    transition: all 250ms;
  }

  &.ch-switch-checked {
    background: #1890ff;

    > span {
      left: calc(100% - 20px);
    }
  }

  &:active {
    > span {
      width: 22px;
    }
  }

  &.ch-switch-checked:active {
    span {
      width: 22px;
      margin-left: -4px;
    }
  }

  &.ch-switch-disabled {
    cursor: not-allowed;
    opacity: .4;

    &:active {
      span {
        width: 18px;
        margin-left: 0;
      }
    }
  }
}
</style>