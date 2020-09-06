<template>
  <button class="ch-switch">
    <span></span>
  </button>
</template>

<script>
export default {
name: "Switch"
}
</script>

<style lang="scss">
  .ch-switch{
    height: 22px;
    width: 44px;
    border: none;
    background: #1890ff;
    border-radius: 11px;
    position: relative;
    >span{
      position: absolute;
      top: 2px;
      left: 2px;
      height: 18px;
      width: 18px;
      background: #fff;
      border-radius: 9px;
    }
  }
</style>