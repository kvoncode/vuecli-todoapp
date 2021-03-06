export const mutations = {
  addTodo(state) {
    state.todos.push({ ...state.todoToAdd, id: state.nextTodoId++ });
  },

  deleteTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },
  changeTodoToEdit(state, todo) {
    state.todoToEdit = { ...todo };
  },

  changeTodoToSave(state, todo) {
    state.todoToSave = todo;
  },

  saveEdited(state) {
    const index = state.todos.indexOf(state.todoToSave);
    state.todos.splice(index, 1, state.todoToEdit)
  },
};
