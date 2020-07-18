import Vue from "vue";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import ButtonGroup from "./ButtonGroup.vue";
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";
import Layout from "./Layout";
import Header from "./Header";
import Content from "./Content";
import Aside from "./Aside";
import Footer from "./Footer";

Vue.component("c-button", Button);
Vue.component("c-icon", Icon);
Vue.component("c-button-group", ButtonGroup);
Vue.component("c-input", Input);
Vue.component("c-row", Row);
Vue.component("c-col", Col);
Vue.component("c-layout", Layout)
Vue.component("c-header", Header)
Vue.component("c-content", Content)
Vue.component("c-aside", Aside)
Vue.component("c-footer", Footer)

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  }
});