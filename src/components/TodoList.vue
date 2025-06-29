<!-- src/components/TodoList.vue -->
<template>
  <div class="todo-container">
    <h2>Todo List</h2>

    <form @submit.prevent="store.addTodo" class="form">
      <input
        v-model="store.newTodoText"
        placeholder="Tambah todo baru..."
        class="input"
      />
      <button type="submit" class="button">Tambah</button>
    </form>

    <ul class="list">
      <li v-for="todo in store.todos" :key="todo.id" class="item">
        <label>
          <input type="checkbox" :checked="todo.done" @change="store.toggleTodo(todo.id)" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </label>
        <button @click="store.deleteTodo(todo.id)">hapus</button>
      </li>
    </ul>

    <div class="summary">
      <p>Selesai: {{ store.doneTodos }}</p>
      <p>Belum: {{ store.unfinishedTodos.length }}</p>
      <p>Total: {{ store.totalTodos }}</p>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/todoStore'
const store = useTodoStore()
</script>

<style scoped>
.todo-container {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.form {
  display: flex;
  gap: 10px;
}
.input {
  flex: 1;
  padding: 0.5rem;
}
.button {
  padding: 0.5rem 1rem;
  background: #42b983;
  border: none;
  color: white;
  cursor: pointer;
}
.list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.done {
  text-decoration: line-through;
  color: gray;
}
.summary {
  margin-top: 1rem;
  font-weight: bold;
}
</style>