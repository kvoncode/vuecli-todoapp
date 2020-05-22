<template>
  <div class="container">
    <h4>Todo</h4>

    <a class="add-todo waves-effect waves-light btn modal-trigger" href="#modal1">Add item</a>
    <ul class="collapsible expandable todo-list">
      <TodoItem
        @delete="deleteTodo"
        @edit="editTodo"
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
      ></TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props: {
    todos: Array
  },
  methods: {
    deleteTodo: function(id) {
      for (let index = 0; index < this.todos.length; index++) {
        if (this.todos[index].id === id) {
          this.todos.splice(index, 1);
          break;
        }
      }
    },

    editTodo: function(todo) {
      this.todoToEdit = todo;
    }
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
}

.add-todo {
  width: 100%;
}

.todo-list {
  margin-top: 1.5rem;
  width: 100%;
}
</style>
