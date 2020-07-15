import Vue from "vue";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import ButtonGroup from "./ButtonGroup.vue";

Vue.component("c-button", Button);
Vue.component("c-icon", Icon);
Vue.component("c-button-group", ButtonGroup);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  }
});