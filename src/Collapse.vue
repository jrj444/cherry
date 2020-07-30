<template>
  <div class="ch-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Collapse",

};
</script>

<style lang="scss" scoped>
.ch-collapse {
  border-top: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
}
</style>