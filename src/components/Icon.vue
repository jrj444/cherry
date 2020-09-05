<template>
  <svg class="ch-icon">
    <use :xlink:href=`#i-${name}`></use>
  </svg>
</template>

<script>
  import "../libs/svg.js";

  export default {
    name: "Icon",
    props: ["name"]
  };
</script>

<style lang="scss" scoped>
  .ch-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>