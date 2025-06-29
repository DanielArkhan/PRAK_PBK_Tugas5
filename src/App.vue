<!-- src/App.vue -->
<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script setup>
import TodoList from './components/TodoList.vue'
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 2rem;
  background-color: #f2f2f2;
}
</style>