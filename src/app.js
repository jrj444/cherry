import Vue from "vue";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import ButtonGroup from "./ButtonGroup.vue";
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";

Vue.component("c-button", Button);
Vue.component("c-icon", Icon);
Vue.component("c-button-group", ButtonGroup);
Vue.component("c-input", Input);
Vue.component("c-row", Row);
Vue.component("c-col", Col);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  },
  methods: {
    onChange(e) {
      console.log(e.target.value);
    }
  }
});