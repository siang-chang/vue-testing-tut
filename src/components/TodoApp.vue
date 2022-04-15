<template>
  <!-- todo -->
  <div class="todo-app" data-test="todo-app">
    <h1>Hi, let learn vue testing!</h1>
    <!-- form with input -->
    <form @submit.prevent="addTodo" data-test="todo-form">
      <input
        class="todo-input"
        type="text"
        v-model="newTodo"
        data-test="todo-input"
      />
    </form>
    <!-- ul with class `.todo-list` -->
    <ul class="todo-list" data-test="todo-list">
      <!-- each todo -->
      <li
        v-for="todo in todos"
        class="todo-item"
        data-test="todo"
        :key="todo.id"
      >
        <!-- checkbox -->
        <input
          type="checkbox"
          v-model="todo.completed"
          data-test="todo-checkbox"
        />
        <!-- todo text -->
        <span
          class="todo-text"
          :class="{ completed: todo.completed }"
          data-test="todo-text"
          >{{ todo.text }}</span
        >
        <!-- remove button -->
        <button
          @click="removeTodo(todo)"
          class="todo-remove"
          data-test="todo-remove"
        >
          X
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoApp",
  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: 1,
          text: "What needs to be done?",
          completed: false,
        },
      ],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: Date.now(),
        text: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-app {
  padding: 20px;
  background: #f4f4f4;
}
.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.todo-list > li {
  position: relative;
  padding: 10px;
  border-bottom: 1px solid #ededed;
}
.todo-text {
  font-size: 24px;
  margin-left: 10px;
}
/* .todo-text with completed */
.todo-text.completed {
  color: #d9d9d9;
  text-decoration: line-through;
}
.todo-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ededed;
  margin-bottom: 10px;
}
/* todo remove button */
.todo-remove {
  color: #cc9a9a;
  font-size: 24px;
  margin-left: 10px;
  cursor: pointer;
  border: 0;
  background: transparent;
}
</style>
