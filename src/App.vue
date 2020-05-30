<template>
  <div id="app">
    <TodoList></TodoList>
    <ModalAdd></ModalAdd>
    <ModalEdit></ModalEdit>
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
    deleteTodo: function(id) {
      console.log("delete todo event handled:", id);

      // for (let index = 0; index < this.todos.length; index++) {
      //   if (this.todos[index].id === id) {
      //     this.todos.splice(index, 1);
      //     break;
      //   }
      // }
    },

    editTodo: function(todo) {
      this.todoToEdit = todo;
    },

    // addTodo: function() {
    //   const todo = {
    //     id: this.nextTodoId++,
    //     ...this.todoToAdd,
    //     due: new Date()
    //   };
    //   this.todos.push(todo);
    // },
    saveEdited: function() {
      // console.log("save edite event triggered", myGlobal.modal2.date);
      for (let index = 0; index < this.todos.length; index++) {
        if (this.todos[index].id === this.todoToEdit.id) {
          // this.todoToEdit.due = new Date(myGlobal.modal2.date);
          this.todos[index] = {
            ...this.todoToEdit
          };
          // console.log(this.todos[index]);
          break;
        }
      }
    }
  },
  data() {
    return {
      nextTodoId: 4
    };
  }
};
</script>

<style scoped>
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 99vw;
  margin: auto;
  min-height: 500px;
}
</style>
