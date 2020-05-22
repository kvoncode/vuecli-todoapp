<template>
  <li>
    <div class="collapsible-header my-collapse">
      <div class="todo-info">
        <div class="header-container">
          <h6 v-bind:class="todo.isCompleted ? 'completed' : 'not-completed'">
            {{ todo.title }}
          </h6>
        </div>
      </div>
    </div>

    <div class="info-bar">
      <div class="small-info-container">
        <div class="small-info">
          priority: {{ todo.priority ? todo.priority : "none" }}
        </div>
        <div class="small-info">
          deadline:
          {{
            todo.due
              ? todo.due.getFullYear() +
                "/" +
                (todo.due.getMonth() + 1) +
                "/" +
                todo.due.getDate()
              : "none"
          }}
        </div>
      </div>
      <div class="edit">
        <a
          v-on:click="editTodo(todo)"
          href="#modal2"
          title="Edit"
          class="waves-effect waves-teal btn-flat modal-trigger"
        >
          <i class="material-icons edit-icon">edit</i>
        </a>
        <a
          title="Delete"
          v-on:click="deleteTodo(todo.id)"
          class="waves-effect waves-teal btn-flat"
        >
          <i class="material-icons">delete</i>
        </a>
      </div>
    </div>
    <div class="collapsible-body">{{ todo.text }}</div>
  </li>
</template>

<script>

export default {
  name: "TodoItem",

  props: {
    todo: Object,
  },
  methods: {
    deleteTodo(id) {
      this.$emit("delete", id);
    },
    editTodo(todo) {
      this.$emit("edit", todo);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-collapse {
  padding: 1px;
  border-bottom: 0;
}

.todo-info {
  width: 100%;
}

.header-container {
  display: flex;
  justify-content: center;
}

.completed {
  background: #1e88e5;
  color: white;
  border-radius: 3px;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
}

.not-completed {
  background: #741ee5;
  color: white;
  border-radius: 3px;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
}

.info-bar {
  border-bottom: 1px solid #dddddd;
  display: flex;
  justify-content: space-between;
}

.small-info-container {
  display: inline-flex;
  flex-direction: column;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
}

.small-info {
  font-size: 0.8rem;
  color: #448aff;
}

.edit {
  display: inline;
  margin-right: 1rem;
  color: #d1d1d1;
}
</style>
