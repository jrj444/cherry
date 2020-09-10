<template>
  <label class="ch-input">
    <input :value="value" :disabled="disabled" :readonly="readonly" :class="{error}" :placeholder="placeholder"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
    ></input>
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
    placeholder: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.ch-input {
  display: inline-flex;
  align-items: center;

  & + .ch-input {
    margin-left: 1em;
  }

  > input {
    height: 32px;
    border: 1px solid #d9d9d9;
    width: 100%;
    border-radius: 4px;
    font-size: 14px;
    padding: 0 8px;

    &:hover {
      border-color: #40a9ff;
    }

    &:focus {
      outline: none;
      border-color: #40a9ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, .2);
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
      border-color: #f5222d;
    }
  }
}
</style>