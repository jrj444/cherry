import Toast from "../components/Toast";

let currentToast;

export default {
  install(Vue) {
    Vue.prototype.$toast = (message, toastOptions) => {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null;
        }
      });
    };
  }
};

function createToast({Vue, message, propsData, onClose}) {
  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({propsData});
  toast.$slots.default = [message];
  toast.$mount();
  toast.$on("close", onClose);
  document.body.appendChild(toast.$el);
  return toast;
}