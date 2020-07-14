import Vue from "vue";
import Button from "./Button";
import Icon from "./Icon";

Vue.component("c-button", Button);
Vue.component("c-icon", Icon);

new Vue({
  el: "#app"
});