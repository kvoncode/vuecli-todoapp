import Vue from "vue";
import Vuex from "vuex";

import { mutations } from "./mutations";
import { actions } from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoToAdd: {
      title: "",
      text: "",
      isCompleted: false,
      priority: null,
    },

    nextTodoId: 4,
    
    todoToEdit: {
      id: null,
      title: "",
      text: "",
      isCompleted: false,
      priority: null,
    },

    todoToSave: {},

    todos: [
      {
        id: 1,
        title: "TodoList component",
        text: "",
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
