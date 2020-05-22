<template>
  <div id="app">
    <TodoList></TodoList>
    <ModalAdd :todoToAdd="todoToAdd"></ModalAdd>
    <ModalEdit :todo="todoToEdit"></ModalEdit>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import ModalAdd from "./components/ModalAdd.vue";
import ModalEdit from "./components/ModalEdit.vue";

import M from "materialize-css";


export default {
  name: "App",
  components: {
    TodoList,
    ModalAdd,
    ModalEdit
  },
  mounted() {
    M.AutoInit();
  },
  data() {
    return {
      todoToAdd: {
        title: "",
        text: "",
        isCompleted: false,
        priority: null,
      },
      nextTodoId: 4,

      todoToEdit: {
        id: null,
        title: "",
        text: "",
        isCompleted: false,
        priority: null,
      },
    };
  },
};
</script>

<style scoped>

#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: 500px;
}
</style>
