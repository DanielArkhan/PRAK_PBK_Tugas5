// src/stores/todoStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  // STATE
  const todos = ref([])
  const newTodoText = ref('')

  // GETTERS
  const totalTodos = computed(() => todos.value.length)
  const doneTodos = computed(() => todos.value.filter(todo => todo.done).length)
  const unfinishedTodos = computed(() => todos.value.filter(todo => !todo.done))

  // ACTIONS
  function addTodo() {
    if (!newTodoText.value.trim()) return
    todos.value.push({
      id: Date.now(),
      text: newTodoText.value.trim(),
      done: false
    })
    newTodoText.value = ''
  }

  function toggleTodo(id) {
    const todo = todos.value.find(t => t.id === id)
    if (todo) todo.done = !todo.done
  }

  function deleteTodo(id) {
    todos.value = todos.value.filter(t => t.id !== id)
  }

  return {
    todos,
    newTodoText,
    totalTodos,
    doneTodos,
    unfinishedTodos,
    addTodo,
    toggleTodo,
    deleteTodo
  }
})