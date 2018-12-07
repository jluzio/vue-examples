<template>
  <input :type="type" :value="value" class="form-control" :id="id" :placeholder="placeholder"
    @input="handleTimedUpdate($event)" @blur="handleImmediateUpdate($event)" x />
</template>

<script>
export default {
  props: {
    id: { String, default: null },
    type: { String, default: 'text' },
    value: { String, default: null },
    timeout: { Number, default: 2000 },
    placeholder: { String, default: null }
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
