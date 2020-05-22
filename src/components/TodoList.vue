<template>
  <ul class="collapsible expandable todo-list">
    <TodoItem
      @delete="deleteTodo"
      @edit="editTodo"
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    ></TodoItem>
  </ul>
  
</template>

<script>
import TodoItem from "./TodoItem.vue";


export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "title 1",
          text: "text 1",
          due: new Date(),
          isCompleted: true,
          priority: 10,
        },
        {
          id: 2,
          title: "title 2",
          text: "text 2",
          due: new Date(),
          isCompleted: false,
          priority: 12,
        },
        {
          id: 3,
          title: "title 3",
          text: "text 3",
          due: new Date(),
          isCompleted: true,
          priority: null,
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
