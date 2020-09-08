<template>
  <div class="ch-tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: "Tabs",
    props: {
      selected: {
        type: String,
        required: true
      },
    },
    data() {
      return {
        eventBus: new Vue()
      };
    },
    provide() {
      return {
        eventBus: this.eventBus
      };
    },
    methods: {
      checkChildren() {
        if (this.$children.length === 0) {
          console && console.warn && console.warn("tabs 的子组件应该是 tabs-head 和 tabs-body");
        }
      },
      selectTab() {
        this.$children.forEach((vm) => {
          if (vm.$options.name === "TabsHead") {
            vm.$children.forEach((childVm) => {
              if (childVm.$options.name === "TabsItem" && childVm.name === this.selected) {
                this.eventBus.$emit("update:selected", this.selected, childVm);
              }
            });
          }
        });
      }
    },
    mounted() {
      this.checkChildren();
      this.selectTab();
    }
  };
</script>

<style lang="scss" scoped>

</style>