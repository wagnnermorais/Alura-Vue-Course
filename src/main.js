import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from "vue-resource";
import "./directives/Transform";

Vue.use(VueResource);
Vue.http.options.root = "http://localhost:3000";
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
