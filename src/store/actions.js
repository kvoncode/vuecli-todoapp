export const actions = {
  addTodo({ commit }, text) {
    commit("addTodo", { text, done: false });
  },

  deleteTodo({ commit }, todo) {
    commit("deleteTodo", todo);
  },

  editTodo({ commit }) {
    commit("editTodo");
  },
};
