import Vue from "vue";
import App from "./App.vue";

import "materialize-css/dist/css/materialize.css";
import "normalize.css";

import store from "./store"

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store
}).$mount("#app");
