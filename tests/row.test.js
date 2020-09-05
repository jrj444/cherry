import Vue from "vue";
import {describe, it} from "mocha";
import Row from "@/components/grid/Row";
import Col from "@/components/grid/Col";

Vue.config.productionTip = false;
Vue.config.devtools = false;

const expect = chai.expect;

describe("Row", () => {

  it("存在", () => {
    expect(Row).to.exist;
  });
  it("接收 gutter", (done) => {
    Vue.component("ch-row", Row);
    Vue.component("ch-col", Col);
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
      <ch-row gutter="20">
        <ch-col span="12"></ch-col>
        <ch-col span="12"></ch-col>
      </ch-row>  
    `;
    const vm = new Vue({
      el: div
    });
    setTimeout(() => {
      const row = vm.$el.querySelector(".ch-row");
      expect(getComputedStyle(row).marginLeft).to.eq("-10px");
      expect(getComputedStyle(row).marginRight).to.eq("-10px");
      const cols = vm.$el.querySelectorAll(".ch-col");
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq("10px");
      expect(getComputedStyle(cols[1]).paddingRight).to.eq("10px");
      done();
      vm.$el.remove();
      vm.$destroy();
    }, 0);
  });

  it("接收 align", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Row);
    const vm = new Constructor({
      propsData: {
        align: "center"
      }
    }).$mount(div);
    expect(getComputedStyle(vm.$el).justifyContent).to.eq("center");
    div.remove();
    vm.$destroy();
  });
});