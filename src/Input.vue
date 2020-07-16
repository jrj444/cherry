<template>
  <label class="wrapper">
    <input :value="value" :disabled="disabled" :readonly="readonly" :class="{error}"
           @change="$emit('change', $event)"
           @input="$emit('input', $event)"
           @focus="$emit('focus', $event)"
           @blur="$emit('blur', $event)"
    ></input>
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="error-message">{{error}}</span>
    </template>
  </label>
</template>

<script>
  import Icon from "./Icon";

  export default {
    name: "Input",
    components: {Icon},
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  };
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #f1453d;
  .wrapper {
    display: inline-flex;
    align-items: center;

    > input {
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;

      &:hover {
        border-color: $border-color-hover;
      }

      &:focus {
        outline: none;
        box-shadow: inset 0 1px 3px $box-shadow-color;
      }

      &[disabled] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }

      &[readonly] {
        border-color: #ccc;
        color: #ccc;
      }

      &.error {
        border-color: $red;
      }
    }

    .icon-error {
      fill: $red;
      margin-left: .5em;
    }

    .error-message {
      color: $red;
    }

  }
</style>