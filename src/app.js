import Vue from "vue";
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";

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