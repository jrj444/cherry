<template>
  <div class="ch-tabs-item" @click="xxx" :class="tabClasses">
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
          active: this.active
        };
      }
    },
    created() {
      this.eventBus.$on("update:selected", (name) => {
        this.active = name === this.name;
      });
    },
    methods: {
      xxx() {
        this.eventBus.$emit("update:selected", this.name);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .ch-tabs-item {
    padding: 0 1em;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;

    &.active {
      background: red;
    }
  }
</style>