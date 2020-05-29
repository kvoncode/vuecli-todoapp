export const actions = {
  addTodo({ commit }, text) {
    commit("addTodo", { text, done: false });
  },

  deleteTodo({ commit }, todo) {
    commit("deleteTodo", todo);
  },

  changeTodoToEdit({commit}, todo) {
    commit("changeTodoToEdit", todo);
  },

  editTodo({ commit }, todo) {
    commit("editTodo", todo);
  },
};
