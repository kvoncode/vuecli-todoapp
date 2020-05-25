import Vue from "vue";
import Vuex from "vuex";

import { mutations } from "./mutations";
import { actions } from "actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "Passed from Vuex store",
        text: "Hone todo app (Vue.js CLI, Materialize.css)",
        due: new Date(),
        isCompleted: true,
        priority: 100,
      },
      {
        id: 2,
        title: "Vue.js iteration 2",
        text: "Nuxt.js app",
        due: new Date(),
        isCompleted: false,
        priority: 12,
      },
      {
        id: 3,
        title: "Vue.js iteration 3",
        text: "production app",
        due: new Date(),
        isCompleted: true,
        priority: null,
      },
    ],
  },
  mutations,
  actions,
});

export default store;
