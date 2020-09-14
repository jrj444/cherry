<template>
  <div class="ch-col" :class="colClass" :style="colStyle">
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
    createClasses(obj, srt = "") {
      let classes = [];
      if (!obj) {
        return [];
      }
      if (obj.span) {
        classes.push(`${srt}span-${obj.span}`);
      }
      if (obj.offset) {
        classes.push(`${srt}offset-${obj.offset}`);
      }
      return classes;
    }
  },
  computed: {
    colClass() {
      let {span, offset, xs, sm, md, lg, xl} = this;
      let createClasses = this.createClasses;
      return [
        ...createClasses({span}),
        ...createClasses({offset}),
        ...createClasses(xs, "xs-"),
        ...createClasses(sm, "sm-"),
        ...createClasses(md, "md-"),
        ...createClasses(lg, "lg-"),
        ...createClasses(xl, "xl-")
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

<style lang="scss">
.ch-col {
  box-sizing: border-box;
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