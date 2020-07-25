<template>
  <div class="ch-toast" :class="toastPosition">
    <slot v-if="!useHTML"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <span v-if="showClose" class="ch-close" @click="onClickClose">
      {{showClose.text}}
    </span>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      duration: {
        type: Number,
        default: 3000
      },
      showClose: {
        type: Object,
        default: () => {
          return {
            text: "OK",
            callback: undefined
          };
        }
      },
      useHTML: {
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
      if (this.duration > 0) {
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
  .ch-toast {
    font-size: $font-size;
    background: $toast-bg;
    min-height: $toast-height;
    line-height: 1.8;
    position: fixed;
    left: 50%;
    display: flex;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 8px 16px;

    &.position-top {
      top: 0;
      transform: translateX(-50%);
    }

    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.position-bottom {
      bottom: 0;
      transform: translateX(-50%);
    }
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