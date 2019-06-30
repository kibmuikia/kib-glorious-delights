import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/V1/";
import store from "./store/V1/";
import "./registerServiceWorker";
import "./stylus/main.styl";

import TitleMixin from "./mixins/TitleMixin/V1/";

Vue.mixin(TitleMixin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
