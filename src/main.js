import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

import "materialize-css/dist/css/materialize.css";
import "normalize.css";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    
  },
  mutations: {
    
  }
})

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
