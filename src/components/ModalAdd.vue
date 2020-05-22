<template>
  <div id="modal1" class="my-modal modal bottom-sheet">
    <div class="modal-content my-modal-content">
      <h5>아이템 추가</h5>
      <form class="my-form">
        <div class="input-field">
          <input
            v-model="todoToAdd.title"
            id="my-title"
            type="text"
            class="validate"
          />
          <label for="my-title">제목</label>
        </div>

        <div class="input-field">
          <textarea
            v-model="todoToAdd.text"
            id="textarea1"
            class="materialize-textarea"
          ></textarea>
          <label for="textarea1">내용</label>
        </div>
        <div class="input-field">
          <input id="datepicker1" type="text" class="datepicker" />
          <label for="datepicker1">마감일</label>
        </div>

        <div class="input-field">
          <input
            v-model="todoToAdd.priority"
            id="priority"
            type="number"
            class="validate"
          />
          <label for="priority">우선순위</label>
        </div>

        <label class="is-finished">
          <input
            v-model="todoToAdd.isCompleted"
            type="checkbox"
            class="filled-in"
          />
          <span>완료됨</span>
        </label>

        <div class="my-modal-buttons">
          <a
            v-on:click="addTodo"
            href="#!"
            class="modal-close waves-effect waves-light btn my-modal-button"
            >저장</a
          >
          <a
            href="#!"
            class="modal-close waves-effect waves-light btn red my-modal-button"
            >취소</a
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import M from "materialize-css";

// document.addEventListener("DOMContentLoaded", function() {
//   var elems = document.querySelectorAll(".modal");
//   M.Modal.init(elems);
// });

export default {
  name: "ModalAdd",
  props: {
    todoToAdd: Object,
  },
  methods: {
    addTodo: function() {
      // const todo = {
      //   id: this.nextTodoId++,
      //   ...this.todoToAdd,
      //   due: new Date(myGlobal.modal.date),
      // };

      // this.todos.push(todo);
      
    },
  },
};
</script>

<style scoped>
.my-modal {
  height: 800px !important;
  max-height: 60% !important;
}

.my-modal-content {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.my-form {
  width: 400px;
}

.is-finished {
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.my-modal-buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.my-modal-button {
  margin: 1rem 1rem;
  width: 16rem;
}
</style>
