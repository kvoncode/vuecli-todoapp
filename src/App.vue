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
