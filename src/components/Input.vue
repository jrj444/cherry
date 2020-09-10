<template>
  <label class="ch-input">
    <input :value="value" :disabled="disabled" :readonly="readonly" :placeholder="placeholder" :type="type"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
    ></input>
  </label>
</template>

<script>
export default {
  name: "Input",
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
    },
    type: {
      type: String,
      default: "text"
    }
  }
};
</script>

<style lang="scss" scoped>
.ch-input {
  display: inline-flex;
  align-items: center;
  position: relative;

  & + .ch-input {
    margin-left: 1em;
  }

  > .ch-input-eye {
    position: absolute;
    right: -2em;
    cursor: pointer;
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