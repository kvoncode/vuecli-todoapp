<template>
  <div id="app">
      <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import M from "materialize-css";

export default {
  name: "App",
  components: {
    TodoList,
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  padding: 1rem;
  min-height: 500px;
}


</style>
