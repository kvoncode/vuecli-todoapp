<template>
  <div id="app">
    <TodoList :todos="todos"></TodoList>
    <ModalAdd :todo="todoToAdd" @addtodo="addTodo"></ModalAdd>
    <ModalEdit @saveedited="saveEdited" :todo="todoToEdit"></ModalEdit>
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

    document.addEventListener("DOMContentLoaded", function() {
      var elem = document.querySelector(".collapsible.expandable");
      M.Collapsible.init(elem, {
        accordion: false
      });
    });
  },
  methods: {
    addTodo: function() {
      const todo = {
        id: this.nextTodoId++,
        ...this.todoToAdd,
        due: new Date(),
      };
      this.todos.push(todo);
    },
    saveEdited: function() {
      // console.log("save edite event triggered", myGlobal.modal2.date);
      // for (let index = 0; index < this.todos.length; index++) {
      //   if (this.todos[index].id === this.todoToEdit.id) {
      //     this.todoToEdit.due = new Date(myGlobal.modal2.date);
      //     this.todos[index] = {
      //       ...this.todoToEdit
      //     };
      //     // console.log(this.todos[index]);
      //     break;
      //   }
      // }
    }
  },
  data() {
    return {
      todoToAdd: {
        title: "",
        text: "",
        isCompleted: false,
        priority: null
      },
      nextTodoId: 4,

      todoToEdit: {
        id: null,
        title: "",
        text: "",
        isCompleted: false,
        priority: null
      },
      todos: [
        {
          id: 1,
          title: "Vue.js iteration 1",
          text: "Hone todo app (Vue.js CLI, Materialize.css)",
          due: new Date(),
          isCompleted: true,
          priority: 100
        },
        {
          id: 2,
          title: "Vue.js iteration 2",
          text: "Nuxt.js app",
          due: new Date(),
          isCompleted: false,
          priority: 12
        },
        {
          id: 3,
          title: "Vue.js iteration 3",
          text: "production app",
          due: new Date(),
          isCompleted: true,
          priority: null
        }
      ]
    };
  }
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
