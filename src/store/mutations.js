export const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo);
  },

  deleteTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

};
