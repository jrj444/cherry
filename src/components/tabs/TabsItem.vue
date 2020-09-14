<template>
  <div class="ch-tabs-item" @click="onClick" :class="tabClasses" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabsItem",
    inject: ["eventBus"],
    data() {
      return {
        active: false
      };
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    computed: {
      tabClasses() {
        return {
          active: this.active,
          disabled: this.disabled
        };
      }
    },
    created() {
      this.eventBus.$on("update:selected", (name) => {
        this.active = name === this.name;
      });
    },
    methods: {
      onClick() {
        if (this.disabled) {
          return;
        }
        this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
        this.$emit("click", this);
      }
    }
  };
</script>

<style lang="scss">
  $blue: #1890ff;
  .ch-tabs-item {
    padding: 0 1em;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    &.active {
      color: $blue;
      font-weight: bold;
    }

    &.disabled {
      color: #bbb;
      cursor: not-allowed;
    }
  }
</style>