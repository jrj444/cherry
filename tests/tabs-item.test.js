import Vue from "vue";
import {describe, it} from "mocha";
import Tabs from "@/components/tabs/Tabs";
import TabsHead from "@/components/tabs/TabsHead";
import TabsBody from "@/components/tabs/TabsBody";
import TabsItem from "@/components/tabs/TabsItem";
import TabsPane from "@/components/tabs/TabsPane";

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.component("ch-tabs", Tabs);
Vue.component("ch-tabs-head", TabsHead);
Vue.component("ch-tabs-body", TabsBody);
Vue.component("ch-tabs-item", TabsItem);
Vue.component("ch-tabs-pane", TabsPane);

const expect = chai.expect;

describe("TabsItem", () => {

  it("存在", () => {
    expect(TabsItem).to.exist;
  });

  it("接收 name", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        name: "hello"
      }
    }).$mount();
    expect(vm.$el.getAttribute("data-name")).to.eq("hello");
  });

  it("接收 disabled", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount();
    expect(vm.$el.classList.contains("disabled")).to.eq(true);
    const callback = sinon.fake();
    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.not.been.called;
  });
});