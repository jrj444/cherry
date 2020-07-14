<template>
  <button class="c-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <c-icon v-if="icon && !loading" :name="icon" class="icon"></c-icon>
    <c-icon class="loading icon" v-if="loading" name="loading"></c-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    name: "Button",
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
  .c-button {
    font: inherit;
    height: var(--button-height);
    padding: 0 .8em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background: var(--button-active-bg);
    }

    &:focus {
      outline: none;
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