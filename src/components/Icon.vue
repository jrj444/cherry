<template>
  <svg class="ch-icon" aria-hidden="true" fill="currentColor">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import '../libs/svg.js';

export default {
  name: 'Icon',
  props: ['name'],
};
</script>

<style lang="scss">
.ch-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
}
</style>