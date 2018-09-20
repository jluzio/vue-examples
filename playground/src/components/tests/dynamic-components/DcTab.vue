<template>
  <div>
    <div>Tab {{ tabId }}</div>
    <button @click="incCounter">Inc Counter</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  name: 'DcTab',
  props: {
    tabId: { default: 'tab' }
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    incCounter() {
      this.counter++
    }
  }
}
</script>

<style>

</style>
