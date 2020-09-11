import Vue from 'vue';
import "./styles/cherry-ui-global.scss"
import App from './App.vue';
import plugin from "@/libs/plugin";
import Icon from "@/components/Icon";

Vue.config.productionTip = false;
Vue.component("ch-icon", Icon);
Vue.use(plugin);

new Vue({
  render: h => h(App),
}).$mount('#app');
