<template>
  <div class="todo-container">
    <form @submit.prevent="store.addTodo" class="form">
      <input
        v-model="store.newTodoText"
        placeholder="Tambah todo baru..."
        class="input"
      />
      <button type="submit" class="button">+</button>
    </form>

    <div class="filters">
      <button
        class="filter-button"
        :class="{ active: store.filter === 'active' }"
        @click="store.setFilter('active')"
      >
        Active
      </button>
      <button
        class="filter-button"
        :class="{ active: store.filter === 'completed' }"
        @click="store.setFilter('completed')"
      >
        Completed
      </button>
      <button
        class="filter-button"
        :class="{ active: store.filter === 'all' }"
        @click="store.setFilter('all')"
      >
        All Todos
      </button>
    </div>

    <ul class="list">
      <li v-for="todo in store.filteredTodos" :key="todo.id" class="item">
        <label class="custom-checkbox">
          <input
            type="checkbox"
            :checked="todo.done"
            @change="store.toggleTodo(todo.id)"
          />
          <span class="checkmark"></span>
          <span class="todo-text" :class="{ done: todo.done }">{{ todo.text }}</span>
        </label>
        <button @click="store.deleteTodo(todo.id)">🗑</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/todoStore'
const store = useTodoStore()
</script>

<style scoped>
.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #ffffff;
  max-width: 480px;
  margin: auto;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
}

.form {
  display: flex;
  gap: 1rem;
  width: 100%;
  margin-bottom: 1rem;
}

.input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 999px;
  font-size: 16px;
}

.button {
  background-color: #7b2cbf;
  color: white;
  border: none;
  padding: 12px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #5a189a;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

.filter-button {
  padding: 0.5rem 1.2rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: #f1f1f1;
  color: #555;
  transition: background 0.2s;
}

.filter-button.active {
  background: #7b2cbf;
  color: #fff;
}

.filter-button:hover {
  background: #dcdcdc;
}

.list {
  width: 100%;
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #e0d4f7;
  padding: 0.75rem 1rem;
  border-radius: 16px;
  background-color: #fff;
  transition: box-shadow 0.2s;
}

.item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.item label {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.done {
  text-decoration: line-through;
  color: #888;
}

.item button {
  background: transparent;
  border: none;
  color: #7b2cbf;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s;
}

.item button:hover {
  color: #FF0000;
}

.custom-checkbox {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  position: relative;
  user-select: none;
}

.custom-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.custom-checkbox .checkmark {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 3px solid #7b2cbf;
  background-color: white;
  display: inline-block;
  transition: border-color 0.2s ease;
  position: relative;
}

.custom-checkbox .checkmark::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: #7b2cbf;
  border-radius: 50%;
  box-shadow: 0 0 0 2px white;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.custom-checkbox input[type="checkbox"]:checked ~ .checkmark::after {
  opacity: 1;
}

.todo-text {
  margin-left: 34px;
}
</style>