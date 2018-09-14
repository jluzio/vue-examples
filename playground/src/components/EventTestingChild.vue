<template>
  <div>
    <div @increment-child-counter="onIncrementCounter">Child Counter: {{ counter }}</div>
    <button @click="$emit('increment-parent-counter')">Inc Parent Counter</button>
  </div>
</template>

<script>
import {eventBus} from '../services/eventBus'

export default {
  name: 'EventTestingChild',
  data() {
    return {
      counter: 0
    }
  },
  created() {
    eventBus.$on('increment-child-counter', this.onIncrementCounter)
  },
  methods: {
    onIncrementCounter() {
      this.counter++
    }
  }
}
</script>

<style>

</style>
