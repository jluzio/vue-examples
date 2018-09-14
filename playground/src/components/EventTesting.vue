<template>
  <div>
    <button @click="incrementCounterChildrenViaRef">Inc Child Counter via Ref</button>
    <button @click="incrementCounterChildrenViaEventBus">Inc Child Counter via Event Bus</button>
    <div>Parent Counter: {{ counter }}</div>
    <event-testing-child ref="child1" @increment-parent-counter="onIncrementCounter" />
    <event-testing-child ref="child2" @increment-parent-counter="onIncrementCounter" />
    <event-testing-child ref="child3" @increment-parent-counter="onIncrementCounter" />
  </div>
</template>

<script>
import EventTestingChild from './EventTestingChild'
import {eventBus} from '../services/eventBus'

export default {
  name: 'EventTesting',
  components: {EventTestingChild},
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    onIncrementCounter() {
      this.counter++
    },
    incrementCounterChildrenViaRef() {
      for (let childRef in this.$refs) {
        this.$refs[childRef].onIncrementCounter()
      }
    },
    incrementCounterChildrenViaEventBus() {
      eventBus.$emit('increment-child-counter')
    }
  }
}
</script>

<style>

</style>
