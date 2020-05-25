export const actions = {
  addTodo({ commit }, text) {
    commit("addTodo", { text, done: false });
  },

  removeTodo({ commit }, todo) {
    commit("removeTodo", todo);
  },

  editTodo({ commit }) {
    commit("editTodo");
  },
};
