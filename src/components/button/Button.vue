<template>
  <button
      class="ch-button"
      @click="$emit('click')"
      :class="[
        'ch-icon-' + iconPosition,
        'ch-button-' + type,
        'ch-button-' + size,
        {
          'is-circle': circle,
          'is-disabled': disabled,
          'is-loading': loading
        }
      ]"
  >
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
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.ch-button {
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  padding: 12px 14px;
  border-radius: 3px;
  border: 1px solid #dcdfe6;
  background: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer;
  outline: none;

  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }

  &.is-loading {
    pointer-events: none;
    background: #69c0ff;
    border-color: #69c0ff;

    &:before {
      pointer-events: none;
      content: "";
      position: absolute;
      left: -1px;
      top: -1px;
      right: -1px;
      bottom: -1px;
      border-radius: inherit;
      background-color: #69c0ff;
    }
  }

  & + .ch-button {
    margin-left: 1em;
  }

  &.ch-icon-left {
    > .icon {
      order: 1;
      font-size: 14px;
    }

    > .content {
      order: 2;
    }
  }

  &.ch-icon-right {
    > .icon {
      order: 2;
      font-size: 14px;
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

    &.is-disabled {
      cursor: not-allowed;
      color: #d9d9d9;
      border-color: #ebeef5;
      background: #fff;

      &:hover, &:focus, &:active {
        cursor: not-allowed;
        color: #d9d9d9;
        border-color: #ebeef5;
        background: #fff;
      }
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

    &.is-disabled {
      cursor: not-allowed;
      color: #fff;
      border-color: #91d5ff;
      background: #91d5ff;

      &:hover, &:focus, &:active {
        cursor: not-allowed;
        color: #fff;
        border-color: #91d5ff;
        background: #91d5ff;
      }
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

    &.is-disabled {
      cursor: not-allowed;
      color: #c0c4cc;
      background: #fff;

      &:hover, &:focus, &:active {
        cursor: not-allowed;
        color: #c0c4cc;
      }
    }
  }

  &-link {
    color: #1890ff;
    background: #fff;
    border: none;
    box-shadow: none;

    &:focus, &:hover {
      color: #40a9ff;
    }

    &:active {
      color: #096dd9;
    }

    &.is-disabled {
      cursor: not-allowed;
      color: #c0c4cc;

      &:hover, &:focus, &:active {
        cursor: not-allowed;
        color: #c0c4cc;
      }
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

    &.is-disabled {
      cursor: not-allowed;
      color: #fff;
      border-color: #b7eb8f;
      background: #b7eb8f;

      &:hover, &:focus, &:active {
        cursor: not-allowed;
        color: #fff;
        border-color: #b7eb8f;
        background: #b7eb8f;
      }
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

    &.is-disabled {
      cursor: not-allowed;
      color: #fff;
      border-color: #fffb8f;
      background: #fffb8f;

      &:hover, &:focus, &:active {
        cursor: not-allowed;
        color: #fff;
        border-color: #fffb8f;
        background: #fffb8f;
      }
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

    &.is-disabled {
      cursor: not-allowed;
      color: #fff;
      border-color: #ffa39e;
      background: #ffa39e;

      &:hover, &:focus, &:active {
        cursor: not-allowed;
        color: #fff;
        border-color: #ffa39e;
        background: #ffa39e;
      }
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