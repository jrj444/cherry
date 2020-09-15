<template>
  <div class="ch-popover" ref="popover">
    <div class="ch-popover-content" ref="content" v-if="visible" :class="{[`ch-popover-position-${position}`]:true}">
      <slot name="content" :close="close"></slot>
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
  computed: {
    openEvent() {
      if (this.trigger === 'click') {
        return 'click';
      } else {
        return 'mouseenter';
      }
    },
    closeEvent() {
      if (this.trigger === 'click') {
        return 'click';
      } else {
        return 'mouseenter';
      }
    }
  },
  mounted() {
    this.addPopoverListeners();
  },
  destroyed() {
    this.putBackContent();
    this.removePopoverListeners();
  },
  methods: {
    addPopoverListeners() {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClick);
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open);
        this.$refs.popover.addEventListener('mouseleave', this.close);
      }
    },
    removePopoverListeners() {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onClick);
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open);
        this.$refs.popover.removeEventListener('mouseleave', this.close);
      }
    },
    putBackContent() {
      const {content, popover} = this.$refs;
      if (!content) {
        return;
      }
      popover.appendChild(content);
    },
    positionContent() {
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
        this.positionContent();
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

<style lang="scss">
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

.ch-popover-content {
  position: absolute;
  border: 1px solid #ebeef5;
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

  &.ch-popover-position-top {
    transform: translateY(-100%);
    margin-top: -12px;

    &::before, &::after {
      margin-left: -6px;
    }

    &::before {
      border-top-color: #ebeef5;
      top: 100%;
    }

    &::after {
      border-top-color: #fff;
      top: calc(100% - 1px);
    }
  }

  &.ch-popover-position-bottom {
    margin-top: 12px;

    &::before, &::after {
      margin-left: -6px;
    }

    &::before {
      border-bottom-color: #ebeef5;
      bottom: 100%;
    }

    &::after {
      border-bottom-color: #fff;
      bottom: calc(100% - 1px);
    }
  }

  &.ch-popover-position-left {
    transform: translateX(-100%);
    margin-left: -12px;

    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }

    &::before {
      border-left-color: #ebeef5;
      left: 100%;
    }

    &::after {
      border-left-color: #fff;
      left: calc(100% - 1px);
    }
  }

  &.ch-popover-position-right {
    margin-left: 12px;

    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }

    &::before {
      border-right-color: #ebeef5;
      right: 100%;
    }

    &::after {
      border-right-color: #fff;
      right: calc(100% - 1px);
    }
  }
}
</style>