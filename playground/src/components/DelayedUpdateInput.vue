<template>
  <input :type="type" :value="value" class="form-control"
    @input="handleTimedUpdate($event)" @blur="handleImmediateUpdate($event)" x />
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'text' },
    value: { type: String, default: null },
    timeout: { type: Number, default: 2000 }
  },
  data() {
    return {
      updateTimer: null
    }
  },
  methods: {
    handleTimedUpdate(event) {
      const value = event.target.value
      this.clearTimer()
      this.updateTimer = setTimeout(() => this.updateValue(value), this.timeout)
    },
    handleImmediateUpdate(event) {
      const value = event.target.value
      this.updateValue(value)
    },
    clearTimer() {
      if (this.updateTimer) {
        clearTimeout(this.updateTimer)
        this.updateTimer = null
      }
    },
    updateValue(value) {
      this.clearTimer()
      this.$emit('update:value', value)
    }
  }
}
</script>

<style>

</style>
