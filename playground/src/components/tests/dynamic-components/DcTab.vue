<template>
  <div>
    <div>Tab {{ tabId }}</div>
    <button @click="incCounter" class="btn">Inc Counter</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
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
