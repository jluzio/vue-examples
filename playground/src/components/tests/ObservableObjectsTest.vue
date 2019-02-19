<template>
  <div>
    <h5>Reactive Objects</h5>
    <ul class="list-group">
      <li class="list-group-item">
        <button @click="test">Test</button>
      </li>
      <li class="list-group-item">
        Reactive: {{reactiveCount}}
      </li>
      <li class="list-group-item">
        NonReactive: {{nonReactiveCount}}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

const reactiveState = Vue.observable({
  count: 0
})
const nonReactiveState = {
  count: 0
}

export default {
  computed: {
    reactiveCount() {
      return reactiveState.count
    },
    nonReactiveCount() {
      return nonReactiveState.count
    }
  },
  methods: {
    test() {
      console.log(reactiveState)
      reactiveState.count++
      nonReactiveState.count++
    }
  }
}
</script>

<style scoped>
</style>
