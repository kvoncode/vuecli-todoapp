<template>
  <div id="modal2" class="my-modal modal bottom-sheet">
    <div class="modal-content my-modal-content">
      <h5>Edit</h5>
      <form class="my-form">
        <div class="input-field">
          <input
            :placeholder="todo.title"
            v-model="todo.title"
            id="my-title"
            type="text"
            class="validate"
          />
          <label for="my-title">Title</label>
        </div>

        <div class="input-field">
          <textarea
            :placeholder="todo.text"
            v-model="todo.text"
            id="textarea1"
            class="materialize-textarea"
          ></textarea>
          <label for="textarea1">Text</label>
        </div>
        <div class="input-field">
          <input id="datepicker1" type="text" class="datepicker" />
          <label for="datepicker1">Deadline</label>
        </div>

        <div class="input-field">
          <input
            :placeholder="todo.priority"
            v-model="todo.priority"
            id="priority"
            type="number"
            class="validate"
          />
          <label for="priority">Priority</label>
        </div>

        <label class="is-finished">
          <input v-model="todo.isCompleted" type="checkbox" class="filled-in" />
          <span>Completed</span>
        </label>

        <div class="my-modal-buttons">
          <a
            @click="saveEdited"
            href="#!"
            class="modal-close waves-effect waves-light btn my-modal-button"
          >Save</a>
          <a href="#!" class="modal-close waves-effect waves-light btn red my-modal-button">Cancel</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalEdit",
  props: {
    todo: Object
  },
  methods: {
    saveEdited() {
      this.$emit("saveedited");
    }
  }
};
</script>

<style scoped></style>
