<template>
  <button class="ch-button" :class="`ch-icon-${iconPosition} ch-button-${type} ch-button-${size}`"
          @click="$emit('click')">
    <ch-icon v-if="icon && !loading" :name="icon" class="icon"></ch-icon>
    <ch-icon class="loading icon" v-if="loading" name="loading"></ch-icon>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from "../Icon";

export default {
  name: "Button",
  components: {
    "ch-icon": Icon
  },
  props: {
    icon: {},
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "normal"
    },
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

<style lang="scss">
.ch-button {
  font-size: 14px;
  height: 32px;
  padding: 1em 0.8em;
  border-radius: 0.15em;
  border: 1px solid #dcdfe6;
  background: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer;
  outline: none;

  & + .ch-button {
    margin-left: 1em;
  }

  &.ch-icon-left {
    > .icon {
      order: 1;
      margin-right: .1em;
    }

    > .content {
      order: 2;
    }
  }

  &.ch-icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
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

  &-default {
    &:focus, &:hover {
      color: #40a9ff;
      background: #fff;
      border-color: #40a9ff;
    }

    &:active {
      color: #096dd9;
      background: #fff;
      border-color: #096dd9;
    }
  }

  &-primary {
    color: #fff;
    background: #1890ff;
    border-color: #1890ff;

    &:hover, &:focus {
      color: #fff;
      background: #40a9ff;
      border-color: #40a9ff;
    }

    &:active {
      color: #fff;
      background: #096dd9;
      border-color: #096dd9;
    }
  }

  &-text {
    color: rgba(0, 0, 0, .85);
    background: 0 0;
    border-color: transparent;
    box-shadow: none;

    &:focus, &:hover {
      color: rgba(0, 0, 0, .85);
      background: rgba(0, 0, 0, .018);
      border-color: transparent;
    }

    &:active {
      background: rgba(0, 0, 0, .1);;
    }
  }

  &-link {
    color: #1890ff;
    background: 0 0;
    border-color: transparent;
    box-shadow: none;

    &:focus, &:hover {
      color: #40a9ff;
    }
  }

  &-success {
    color: #fff;
    background: #52c41a;
    border-color: #52c41a;

    &:hover, &:focus {
      color: #fff;
      background: #73d13d;
      border-color: #73d13d;
    }

    &:active {
      color: #fff;
      background: #389e0d;
      border-color: #389e0d;
    }
  }

  &-warning {
    color: #fff;
    background: #fadb14;
    border-color: #fadb14;

    &:hover, &:focus {
      color: #fff;
      background: #ffec3d;
      border-color: #ffec3d;
    }

    &:active {
      color: #fff;
      background: #d4b106;
      border-color: #d4b106;
    }
  }

  &-dangerous {
    color: #fff;
    background: #f5222d;
    border-color: #f5222d;

    &:hover, &:focus {
      color: #fff;
      background: #ff4d4f;
      border-color: #ff4d4f;
    }

    &:active {
      color: #fff;
      background: #cf1322;
      border-color: #cf1322;
    }
  }

  &-large {
    font-size: 16px;
    height: 42px;
    padding: 4px 16px;
    border-radius: 2px;
  }

  &-small {
    height: 24px;
    padding: 0 7px;
    font-size: 14px;
    border-radius: 2px;
  }
}
</style>