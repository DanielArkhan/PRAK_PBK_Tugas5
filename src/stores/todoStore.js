import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])
  const newTodoText = ref('')
  const filter = ref('all')

  const totalTodos = computed(() => todos.value.length)
  const doneTodos = computed(() => todos.value.filter(todo => todo.done).length)
  const unfinishedTodos = computed(() => todos.value.filter(todo => !todo.done))

  const filteredTodos = computed(() => {
    if (filter.value === 'completed') {
      return todos.value.filter(todo => todo.done)
    } else if (filter.value === 'active') {
      return todos.value.filter(todo => !todo.done)
    } else {
      return todos.value
    }
  })

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

  function setFilter(value) {
    filter.value = value
  }

  return {
    todos,
    newTodoText,
    totalTodos,
    doneTodos,
    unfinishedTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    filteredTodos,
    filter,
    setFilter
  }
})