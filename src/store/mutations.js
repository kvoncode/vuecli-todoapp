export const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo);
  },

  deleteTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

  editTodo(state, { todo, text = todo.text, done = todo.done }) {
    const index = state.todos.indexOf(todo);
    state.todos.splice(index, 1, {
      ...todo,
      text,
      done,
    });
  },
};
