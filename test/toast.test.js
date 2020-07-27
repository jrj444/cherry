import Vue from "vue";
import {describe, it} from "mocha";
import Toast from "../src/Toast";

Vue.config.productionTip = false;
Vue.config.devtools = false;

const expect = chai.expect;

describe("Toast", () => {

  it("存在", () => {
    expect(Toast).to.exist;
  });

  describe("props", () => {
    it("接收 duration", (done) => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          duration: 1000
        }
      }).$mount(div);
      vm.$on("close", () => {
        expect(document.body.contains(vm.$el)).to.eq(false);
        done();
      });
    });

    it("接收 showClose", () => {
      const callback = sinon.fake();
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          showClose: {
            text: "OK",
            callback
          }
        }
      }).$mount();
      let close = vm.$el.querySelector(".ch-close");
      expect(close.textContent.trim()).to.eq("OK");
      close.click();
      expect(callback).to.have.been.called;
    });

    it("接收 useHtml", () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {useHtml: true}
      });
      vm.$slots.default = [`<strong id="test">hi</strong>`];
      vm.$mount();
      let strong = vm.$el.querySelector("#test");
      expect(strong).to.exist;
    });

    it("接收 position", () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          position: "bottom"
        }
      }).$mount();
      expect(vm.$el.classList.contains("position-bottom")).to.eq(true);
    });
  });
});