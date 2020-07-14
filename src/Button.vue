<template>
  <button class="c-button">按钮</button>
</template>

<script>
  export default {
    name: "Button"
  };
</script>

<style lang="scss" scoped>
  .c-button {
    font: inherit;
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }
  }
</style>