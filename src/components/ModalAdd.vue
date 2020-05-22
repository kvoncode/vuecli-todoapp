<template>
  <div id="modal1" class="my-modal modal bottom-sheet">
    <div class="modal-content my-modal-content">
      <h5>Add item</h5>
      <form class="my-form">
        <div class="input-field">
          <input v-model="todo.title" id="my-title" type="text" class="validate" />
          <label for="my-title">Title</label>
        </div>

        <div class="input-field">
          <textarea v-model="todo.text" id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Text</label>
        </div>
        <div class="input-field">
          <input id="datepicker1" type="text" class="datepicker" />
          <label for="datepicker1">Deadline</label>
        </div>

        <div class="input-field">
          <input v-model="todo.priority" id="priority" type="number" class="validate" />
          <label for="priority">Priority</label>
        </div>

        <label class="is-finished">
          <input v-model="todo.isCompleted" type="checkbox" class="filled-in" />
          <span>Completed</span>
        </label>

        <div class="my-modal-buttons">
          <a
            v-on:click="addTodo"
            href="#!"
            class="modal-close waves-effect waves-light btn my-modal-button"
          >Add</a>
          <a href="#!" class="modal-close waves-effect waves-light btn red my-modal-button">Cancel</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalAdd",
  props: {
    todo: Object
  },
  methods: {
    addTodo: function() {
      // const todo = {
      //   id: this.nextTodoId++,
      //   ...this.todo,
      //   due: new Date(myGlobal.modal.date),
      // };
      // this.todos.push(todo);
    }
  }
};
</script>

<style>
.my-modal {
  height: 800px !important;
  max-height: 60% !important;
  width: 100vw;
}

.my-modal-content {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 !important;

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
