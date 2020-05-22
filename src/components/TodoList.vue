<template>
  <div class="hello">
    Todo List
    <TodoItem :todo="todoitem"></TodoItem>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

const todoitem = {
  id: 2,
  title: "title 2",
  text: "text 2",
  due: new Date(),
  isCompleted: false,
  priority: 12,
};

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
      todoitem: todoitem,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
