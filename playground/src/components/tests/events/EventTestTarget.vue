<template>
  <div class="test-target">
    <div @increment-child-counter="onIncrementCounter">Child Counter: {{ counter }}</div>
    <button class="btn" @click="$emit('increment-parent-counter')">Inc Parent Counter</button>
  </div>
</template>

<script>
import { eventBus } from '@/services/event-bus'

export default {
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
