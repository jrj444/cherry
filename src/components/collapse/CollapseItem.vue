<template>
  <div class="ch-collapse-item">
    <div class="header" @click="toggle">
      <div>{{ title }}</div>
      <ch-icon name="right" class="ch-collapse-item-arrow" :class="{'ch-collapse-item-arrow-showed':show}"></ch-icon>
    </div>
    <transition name="slide">
      <div class="content" ref="content" v-if="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import {EventBus} from "../../libs/eventbus.js";
import Icon from "../../components/Icon";

export default {
  name: "CollapseItem",
  components: {
    "ch-icon": Icon
  },
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      show: false
    };
  },
  mounted() {
    EventBus.$on('update:selected', (vm) => {
      if (vm !== this && this.$parent.single) {
        this.show = false;
      }
    });
  },
  methods: {
    toggle() {
      if (this.show) {
        this.show = false;
      } else {
        this.show = true;
        EventBus.$emit('update:selected', this);
      }
    }
  }
};
</script>

<style lang="scss">
.slide-enter-active {
  animation: item-show .5s;
}

.slide-leave-active {
  animation: item-show .5s reverse;
}

@keyframes item-show {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.ch-collapse-item {
  border-bottom: 1px solid #ebeef5;
  cursor: pointer;
  outline: none;
  color: #303133;
  box-sizing: border-box;

  &:last-child {
    border-bottom: none;
  }

  & .ch-collapse-item-arrow {
    font-weight: 300;
    margin-right: 8px;
    transition: transform .5s;
    fill: #bfbfbf;

    &.ch-collapse-item-arrow-showed {
      transform: rotate(90deg);
    }
  }

  > .header {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  > .content {
    padding-bottom: 16px;
  }
}
</style>