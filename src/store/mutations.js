export const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo);
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
    console.log("index i need", index);
    state.todos.splice(index, 1, state.todoToEdit)
  },
};
