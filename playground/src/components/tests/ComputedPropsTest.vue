<template>
  <div>
    <div>Counter: {{counter}}</div>
    <div>Counter Label: {{counterLabel}}</div>
    <div>Counter Label: {{getCounterLabel()}}</div>
    <div>Other Value: {{otherValue}}</div>
    <div>
      <button @click="counter++">Counter+</button>
      <button @click="counter--">Counter-</button>
      <button @click="otherValue++">Other Value+</button>
      <button @click="otherValue--">Other Value-</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      counter: 0,
      otherValue: 0
    }
  },
  computed: {
    counterLabel() {
      return this._getCounterLabel('computed property')
    }
  },
  methods: {
    getCounterLabel() {
      return this._getCounterLabel('method')
    },
    _getCounterLabel(source) {
      console.log(`${source} called`)
      return this.counter > 5 ? '> 5' : '< 5'
    }
  }
}
</script>

<style>

</style>
