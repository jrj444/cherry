<template>
  <div class="ch-popover" ref="popover">
    <div class="content" ref="content" v-if="visible" :class="{[`position-${position}`]:true}">
      <slot name="content"></slot>
    </div>
    <span ref="trigger">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "Popover",
  data() {
    return {
      visible: false
    };
  },
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      }
    }
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", this.onClick);
    } else {
      this.$refs.popover.addEventListener("mouseenter", this.open);
      this.$refs.popover.addEventListener("mouseleave", this.close);
    }
  },
  destroyed() {
    if (this.trigger === "click") {
      this.$refs.popover.removeEventListener("click", this.onClick);
    } else {
      this.$refs.popover.removeEventListener("mouseenter", this.open);
      this.$refs.popover.removeEventListener("mouseleave", this.close);
    }
  },
  methods: {
    locateContent() {
      const {content, trigger} = this.$refs;
      document.body.appendChild(content);
      const {top, height, width, left} = trigger.getBoundingClientRect();
      const {height: popHeight} = content.getBoundingClientRect();
      const positions = {
        top: {top: top + window.scrollY, left: left + window.scrollX},
        bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
        left: {top: top + window.scrollY + (height - popHeight) / 2, left: left + window.scrollX},
        right: {top: top + window.scrollY + (height - popHeight) / 2, left: left + window.scrollX + width}
      };
      content.style.top = positions[this.position].top + "px";
      content.style.left = positions[this.position].left + "px";
    },
    onClickDocument(e) {
      if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
        return;
      }
      if (this.$refs.content && (this.$refs.content === e.target || this.$refs.content.contains(e.target))) {
        return;
      }
      this.close();
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.locateContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    onClick(event) {
      if (this.$refs.trigger.contains(event.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$border-color: #ebeef5;

.ch-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;

  & + .ch-popover {
    margin-left: 1em;
  }

  > span {
    display: inline-block;
  }
}

.content {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  background: #fff;
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-all;

  &::before, &::after {
    content: '';
    display: block;
    border: 6px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -12px;

    &::before, &::after {
      margin-left: -6px;
    }

    &::before {
      border-top-color: $border-color;
      top: 100%;
    }

    &::after {
      border-top-color: #fff;
      top: calc(100% - 1px);
    }
  }

  &.position-bottom {
    margin-top: 12px;

    &::before, &::after {
      margin-left: -6px;
    }

    &::before {
      border-bottom-color: $border-color;
      bottom: 100%;
    }

    &::after {
      border-bottom-color: #fff;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -12px;

    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }

    &::before {
      border-left-color: $border-color;
      left: 100%;
    }

    &::after {
      border-left-color: #fff;
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    margin-left: 12px;

    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }

    &::before {
      border-right-color: $border-color;
      right: 100%;
    }

    &::after {
      border-right-color: #fff;
      right: calc(100% - 1px);
    }
  }
}
</style>