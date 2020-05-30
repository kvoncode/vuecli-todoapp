export const actions = {
  addTodo({ commit }) {
    commit("addTodo");
  },

  deleteTodo({ commit }, todo) {
    commit("deleteTodo", todo);
  },

  changeTodoToEdit({ commit }, todo) {
    commit("changeTodoToEdit", todo);
  },

  changeTodoToSave({ commit }, todo) {
    commit("changeTodoToSave", todo);
  },

  saveEdited({ commit }) {
    commit("saveEdited");
  },
};
