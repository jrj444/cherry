<template>
  <div class="col" :class="[span && `span-${span}`, offset && `offset-${offset}`]"
    :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}">
    <div style="border: 1px solid red; height: 100px;">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Col",
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    data() {
      return {
        gutter: 0
      };
    }
  };
</script>

<style lang="scss" scoped>
  .col {
    @for $n from 1 through 24 {
      &.span-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>