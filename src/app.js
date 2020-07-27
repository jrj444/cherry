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
import Tabs from "./Tabs";
import TabsHead from "./TabsHead";
import TabsItem from "./TabsItem";
import TabsBody from "./TabsBody";
import TabsPane from "./TabsPane";

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
Vue.component("ch-tabs", Tabs);
Vue.component("ch-tabs-head", TabsHead);
Vue.component("ch-tabs-item", TabsItem);
Vue.component("ch-tabs-body", TabsBody);
Vue.component("ch-tabs-pane", TabsPane);

new Vue({
  el: "#app",
  data: {
    selectedTab: "tennis"
  },
  methods: {
    showToast() {
      this.$toast("<strong>hi</strong>", {
        position: "middle",
        duration: 0,
        useHtml: true
      });
    }
  }
});