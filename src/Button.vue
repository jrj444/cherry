<template>
  <button class="ch-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <ch-icon v-if="icon && !loading" :name="icon" class="icon"></ch-icon>
    <ch-icon class="loading icon" v-if="loading" name="loading"></ch-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "Button",
  components: {
    "ch-icon": Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ch-button {
  font: inherit;
  height: 32px;
  padding: 0 .8em;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer;
  outline: none;

  &:hover, &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
  }

  &.icon-left {
    > .icon {
      order: 1;
      margin-right: .3em;
    }

    > .content {
      order: 2;
    }
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .3em;
    }

    > .content {
      order: 1;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  > .loading {
    animation: spin 1500ms linear infinite;
  }
}
</style>