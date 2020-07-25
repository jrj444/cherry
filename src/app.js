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
import Toast from "./Toast";
import plugin from "./plugin";

Vue.component("ch-button", Button);
Vue.component("ch-icon", Icon);
Vue.component("ch-button-group", ButtonGroup);
Vue.component("ch-input", Input);
Vue.component("ch-row", Row);
Vue.component("ch-col", Col);
Vue.component("ch-layout", Layout);
Vue.component("ch-header", Header);
Vue.component("ch-content", Content);
Vue.component("ch-aside", Aside);
Vue.component("ch-footer", Footer);
Vue.component("ch-toast", Toast);
Vue.use(plugin);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: "hi"
  },
  created() {
    this.$toast("这是一个message", {
      useHTML: false,
      position: "top"
    });
  },
  methods: {
    showToast() {
      this.$toast("我是message");
    }
  }
});