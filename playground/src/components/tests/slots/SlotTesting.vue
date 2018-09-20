<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <p>named slots:</p>
        <slot-testing-target :class="layoutSlotClasses">
          <div>default slot values</div>
          <template slot="header">slot header</template>
          <p slot="footer">slot footer</p>
        </slot-testing-target>
      </li>
      <li class="list-group-item">
        <p>Scoped Slots:</p>
        <todo-list v-bind:todos="todos" :class="todoListClasses">
          <template slot-scope="slotProps">
            <span v-if="slotProps.todo.isComplete">✓</span>
            {{ slotProps.todo.text }}
          </template>
        </todo-list>
      </li>
      <li class="list-group-item">
        <p>Scoped Slots + Destructuring slot-scope:</p>
        <todo-list v-bind:todos="todos" :class="todoListClasses">
          <template slot-scope="{ todo }">
            <span v-if="todo.isComplete">✓</span>
            {{ todo.text }}
          </template>
        </todo-list>
      </li>
    </ul>
  </div>
</template>

<script>
import SlotTestingTarget from './SlotTestingTarget'
import TodoList from './TodoList'

export default {
  name: 'SlotTesting',
  components: {SlotTestingTarget, TodoList},
  data() {
    return {
      todos: [
        {text: 'todo1', isComplete: false},
        {text: 'todo2', isComplete: true},
        {text: 'todo3', isComplete: false}
      ]
    }
  },
  computed: {
    layoutSlotClasses() {
      return 'slot-example mx-auto'
    },
    todoListClasses() {
      return 'slot-example mx-auto'
    }
  }
}
</script>

<style>
.slot-example {
  width: 25%;
}
</style>
