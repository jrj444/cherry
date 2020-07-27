import Vue from "vue";
import {describe, it} from "mocha";
import Tabs from "../src/Tabs";
import TabsHead from "../src/TabsHead";
import TabsBody from "../src/TabsBody";
import TabsItem from "../src/TabsItem";
import TabsPane from "../src/TabsPane";

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.component("ch-tabs", Tabs);
Vue.component("ch-tabs-head", TabsHead);
Vue.component("ch-tabs-body", TabsBody);
Vue.component("ch-tabs-item", TabsItem);
Vue.component("ch-tabs-pane", TabsPane);

const expect = chai.expect;

describe("Tabs", () => {

  it("存在", () => {
    expect(Tabs).to.exist;
  });

  it("接收 selected", (done) => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
      <ch-tabs selected="football">
        <ch-tabs-head>
          <ch-tabs-item name="football">足球</ch-tabs-item>
          <ch-tabs-item name="cat">猫</ch-tabs-item>
          <ch-tabs-item name="dog">狗</ch-tabs-item>
        </ch-tabs-head>
        <ch-tabs-body>
          <ch-tabs-pane name="football">足球-内容</ch-tabs-pane>
          <ch-tabs-pane name="cat">猫-内容</ch-tabs-pane>
          <ch-tabs-pane name="dog">狗-内容</ch-tabs-pane>
        </ch-tabs-body>
      </ch-tabs>
    `;
    let vm = new Vue({
      el: div
    });
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.ch-tabs-item[data-name="football"]`);
      expect(x.classList.contains("active")).to.eq(true);
      done();
    });
  });

});