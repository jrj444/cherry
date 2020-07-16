import Vue from "vue";
import Input from "../src/Input.vue";
import {describe, it} from "mocha";

Vue.config.productionTip = false;
Vue.config.devtools = false;

const expect = chai.expect;

describe("Input", () => {

  it("存在", () => {
    expect(Input).to.exist;
  });

  describe("props", () => {
    it("接收 value", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          value: "哈哈哈哈"
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.value).to.eq("哈哈哈哈");
      vm.$destroy();
    });

    it("接收 disabled", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.disabled).to.eq(true);
      vm.$destroy();
    });

    it("接收 readonly", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.readOnly).to.eq(true);
      vm.$destroy();
    });

    it("接收 error", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          error: "错误"
        }
      }).$mount();
      const useElement = vm.$el.querySelector("use");
      expect(useElement.getAttribute("xlink:href")).to.eq("#i-error");
      const errorMessage = vm.$el.querySelector(".error-message");
      expect(errorMessage.innerText).to.eq("错误");
      vm.$destroy();
    });
  });

  describe("事件", () => {

    it("change 事件", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor().$mount();
      const callback = sinon.fake();
      vm.$on("change", callback);
      let event = new Event("change");
      Object.defineProperty(event, "target", {value: {value: "test"}, enumerable: true});
      let inputElement = vm.$el.querySelector("input");
      inputElement.dispatchEvent(event);
      expect(callback).to.have.been.calledWith("test");
    });

    it("input 事件", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor().$mount();
      const callback = sinon.fake();
      vm.$on("input", callback);
      let event = new Event("input");
      Object.defineProperty(event, "target", {value: {value: "test"}, enumerable: true});
      let inputElement = vm.$el.querySelector("input");
      inputElement.dispatchEvent(event);
      expect(callback).to.have.been.calledWith("test");
    });

    it("focus 事件", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor().$mount();
      const callback = sinon.fake();
      vm.$on("focus", callback);
      let event = new Event("focus");
      Object.defineProperty(event, "target", {value: {value: "test"}, enumerable: true});
      let inputElement = vm.$el.querySelector("input");
      inputElement.dispatchEvent(event);
      expect(callback).to.have.been.calledWith("test");
    });

    it("blur 事件", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor().$mount();
      const callback = sinon.fake();
      vm.$on("blur", callback);
      let event = new Event("blur");
      Object.defineProperty(event, "target", {value: {value: "test"}, enumerable: true});
      let inputElement = vm.$el.querySelector("input");
      inputElement.dispatchEvent(event);
      expect(callback).to.have.been.calledWith("test");
    });
  });
});