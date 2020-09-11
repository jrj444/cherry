<template>
  <div class="ch-input-wrapper">
    <label class="ch-input">
      <input :value="value" :disabled="disabled" :readonly="readonly" :placeholder="placeholder" :type="type"
             @change="$emit('change', $event.target.value)"
             @input="$emit('input', $event.target.value)"
             @focus="$emit('focus', $event.target.value)"
             @blur="$emit('blur', $event.target.value)"
      >
    </label>
    <div v-if="showPassword" @click="changeType" class="ch-input-eye">
      <Icon name="view"></Icon>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "Input",
  components: {Icon},
  data() {
    return {
      type: ""
    };
  },
  mounted() {
    this.inputType();
  },
  methods: {
    inputType() {
      this.type = this.showPassword ? "password" : "text";
    },
    changeType() {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
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
    showPassword: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.ch-input-wrapper {
  display: inline-flex;
  align-items: center;
  position: relative;

  & + .ch-input-wrapper {
    margin-left: 1em;
  }

  > .ch-input-eye {
    position: absolute;
    right: 0.4em;
    cursor: pointer;
    transition: all .3s;
  }

  .ch-input {

    > input {
      height: 40px;
      line-height: 40px;
      border: 1px solid #d9d9d9;
      width: 100%;
      border-radius: 4px;
      font-size: 14px;
      padding: 0 24px 0 16px;

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
}
</style>