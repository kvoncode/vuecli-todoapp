<template>
  
  <li>
    <div class="collapsible-header my-collapse">
      <div class="todo-info">
        <div class="header-container">
          <h6 v-bind:class="todo.isCompleted ? 'completed' : ''">
            {{ todo.title }}
          </h6>
        </div>
      </div>
    </div>

    <div class="info-bar">
      <div class="small-info-container">
        <div class="small-info">
          우선순위: {{ todo.priority ? todo.priority : "없음" }}
        </div>
        <div class="small-info">
          마감일:
          {{
            todo.due
              ? todo.due.getFullYear() +
                "년" +
                (todo.due.getMonth() + 1) +
                "월" +
                todo.due.getDate() +
                "일"
              : "없음"
          }}
        </div>
      </div>
      <div class="edit">
        <a
          v-on:click="editTodo(todo)"
          href="#modal2"
          title="편집"
          class="waves-effect waves-teal btn-flat modal-trigger"
        >
          <i class="material-icons edit-icon">edit</i>
        </a>
        <a
          title="삭제"
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
import M from "materialize-css";

// collapsible init
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".collapsible");
  M.Collapsible.init(elems);

  var elem = document.querySelector(".collapsible.expandable");
  M.Collapsible.init(elem, {
    accordion: false,
  });
});

export default {
  name: "TodoItem",

  props: {
    todo: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
