<template>
  <div class="wrapper" :class="toastPosition">
    <div class="ch-toast">
      <slot v-if="!useHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
      <span v-if="showClose" class="ch-close" @click="onClickClose">
      {{showClose.text}}
    </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      duration: {
        type: Number,
        default: 3000,
        validator(value) {
          return value > 0;
        }
      },
      showClose: {
        type: Object,
        default: () => {
          return {
            text: "OK",
            callback: () => {
            }
          };
        }
      },
      useHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: "top",
        validator(value) {
          return ["top", "middle", "bottom"].indexOf(value) >= 0;
        }
      }
    },
    mounted() {
      if (this.duration) {
        setTimeout(() => {
          this.close();
        }, this.duration);
      }
    },
    computed: {
      toastPosition() {
        return {[`position-${this.position}`]: true};
      }
    },
    methods: {
      close() {
        this.$el.remove();
        this.$emit("close");
        this.$destroy();
      },
      onClickClose() {
        this.close();
        if (this.showClose && typeof this.showClose.callback() === "function") {
          this.showClose.callback();
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  @keyframes top {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @keyframes bottom {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @keyframes middle {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);

    &.position-top {
      top: 0;

      .ch-toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: top 1s;
      }
    }

    &.position-middle {
      top: 50%;
      transform: translateX(-50%) translateY(-50%);

      .ch-toast {
        animation: middle 1s;
      }
    }

    &.position-bottom {
      bottom: 0;

      .ch-toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: bottom 1s;
      }

    }
  }

  .ch-toast {
    font-size: $font-size;
    background: $toast-bg;
    min-height: $toast-height;
    line-height: 1.8;
    display: flex;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 8px 16px;
  }

  .ch-close {
    padding-left: 16px;
    font-size: 10px;
    flex-shrink: 0;
    color: #999;

    &:hover {
      cursor: pointer;
      color: #fff;
    }
  }

</style>