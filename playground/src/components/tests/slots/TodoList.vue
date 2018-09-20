<template>
  <ul class="list-group">
    <li
      v-for="todo in todos"
      v-bind:key="todo.id"
      class="list-group-item"
    >
      <!-- We have a slot for each todo, passing it the -->
      <!-- `todo` object as a slot prop.                -->
      <slot v-bind:todo="todo">
        <!-- Fallback content -->
        {{ todo.text }}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: Array
  }
}
</script>

<style>

</style>
