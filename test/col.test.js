import Vue from "vue";
import {describe, it} from "mocha";
import Col from "../src/Col";

Vue.config.productionTip = false;
Vue.config.devtools = false;

const expect = chai.expect;

describe("Col", () => {

  it("存在", () => {
    expect(Col).to.exist;
  });

  it("接收 span", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        span: 24
      }
    }).$mount(div);
    expect(vm.$el.classList.contains("span-24")).to.eq(true);
    div.remove();
    vm.$destroy();
  });

  it("接收 offset", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        offset: 1
      }
    }).$mount(div);
    expect(vm.$el.classList.contains("offset-1")).to.eq(true);
    div.remove();
    vm.$destroy();
  });

  it("接收 xs", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        xs: {span: 1, offset: 2}
      }
    }).$mount(div);
    expect(vm.$el.classList.contains("xs-span-1")).to.eq(true);
    expect(vm.$el.classList.contains("xs-offset-2")).to.eq(true);
    div.remove();
    vm.$destroy();
  });

  it("接收 sm", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        sm: {span: 1, offset: 2}
      }
    }).$mount(div);
    expect(vm.$el.classList.contains("sm-span-1")).to.eq(true);
    expect(vm.$el.classList.contains("sm-offset-2")).to.eq(true);
    div.remove();
    vm.$destroy();
  });

  it("接收 md", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        md: {span: 1, offset: 2}
      }
    }).$mount(div);
    expect(vm.$el.classList.contains("md-span-1")).to.eq(true);
    expect(vm.$el.classList.contains("md-offset-2")).to.eq(true);
    div.remove();
    vm.$destroy();
  });

  it("接收 lg", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        lg: {span: 1, offset: 2}
      }
    }).$mount(div);
    expect(vm.$el.classList.contains("lg-span-1")).to.eq(true);
    expect(vm.$el.classList.contains("lg-offset-2")).to.eq(true);
    div.remove();
    vm.$destroy();
  });

  it("接收 xl", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        xl: {span: 1, offset: 2}
      }
    }).$mount(div);
    expect(vm.$el.classList.contains("xl-span-1")).to.eq(true);
    expect(vm.$el.classList.contains("xl-offset-2")).to.eq(true);
    div.remove();
    vm.$destroy();
  });
});