<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  let validator = (value) => {
    let valid = true;
    Object.keys(value).forEach((key) => {
      if (!["span", ["offset"].includes(key)]) {
        valid = false;
      }
    });
    return valid;
  };
  export default {
    name: "Col",
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      xs: {
        type: Object,
        validator
      },
      sm: {
        type: Object,
        validator
      },
      md: {
        type: Object,
        validator
      },
      lg: {
        type: Object,
        validator
      },
      xl: {
        type: Object,
        validator
      }
    },
    data() {
      return {
        gutter: 0
      };
    },
    methods: {
      createCalsses(obj, srt = "") {
        let classes = [];
        if (!obj) {
          return [];
        }
        if (obj.span) {
          classes.push(`${srt}span-${obj.span}`);
        }
        if (obj.output) {
          classes.push(`${srt}span${obj.offset}`);
        }
        return classes;
      }
    },
    computed: {
      colClass() {
        let {span, offset, xs, sm, md, lg, xl} = this;
        return [
          ...this.createCalsses({span, offset}),
          ...this.createCalsses(xs, "xs-"),
          ...this.createCalsses(sm, "sm-"),
          ...this.createCalsses(md, "md-"),
          ...this.createCalsses(lg, "lg-"),
          ...this.createCalsses(xl, "xl-")
        ];
      },
      colStyle() {
        return {
          paddingLeft: this.gutter / 2 + "px",
          paddingRight: this.gutter / 2 + "px"
        };
      }
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
    @media (max-width: 575px) {
      @for $n from 1 through 24 {
        &.xs-span-#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      @for $n from 1 through 24 {
        &.xs-offset-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 576px) {
      @for $n from 1 through 24 {
        &.sm-span-#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      @for $n from 1 through 24 {
        &.sm-offset-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 768px) {
      @for $n from 1 through 24 {
        &.md-span-#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      @for $n from 1 through 24 {
        &.md-offset-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 992px) {
      @for $n from 1 through 24 {
        &.lg-span-#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      @for $n from 1 through 24 {
        &.lg-offset-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1200px) {
      @for $n from 1 through 24 {
        &.xl-span-#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      @for $n from 1 through 24 {
        &.xl-offset-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>