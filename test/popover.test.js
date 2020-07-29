import Vue from "vue";
import {describe, it} from "mocha";
import Popover from "../src/Popover";

Vue.config.productionTip = false;
Vue.config.devtools = false;

const expect = chai.expect;

describe("Popover", () => {

  it("存在", () => {
    expect(Popover).to.exist;
  });

  it("接收 position", (done) => {
    Vue.component("ch-popover", Popover);
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
      <ch-popover position="bottom" ref="pop">
        <template slot="content">
          弹出内容
        </template>
        <button>按钮</button>
      </ch-popover>
    `;
    const vm = new Vue({
      el: div
    });
    vm.$el.querySelector("button").click();
    vm.$nextTick(() => {
      const {content} = vm.$refs.pop.$refs;
      expect(content.classList.contains("position-bottom")).to.eq(true);
      done();
    });
  });
});