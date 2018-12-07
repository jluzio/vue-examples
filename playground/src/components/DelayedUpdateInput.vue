<template>
  <input :type="type" :value="value" class="form-control" :id="id" :placeholder="placeholder"
    @input="handleInput($event)" @blur="handleBlur($event)" x />
</template>

<script>
import $appCfg from '@/$appCfg'

export default {
  props: {
    id: { String, default: null },
    type: { String, default: 'text' },
    value: { String, default: null },
    timeout: { Number, default: 2000 },
    placeholder: { String, default: 'null' }
  },
  data() {
    return {
      updateTimer: null
    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value
      if (this.updateTimer) {
        clearTimeout(this.updateTimer)
      }
      $appCfg.log.debug(`updating value=${value} in ${this.timeout}ms`)
      this.updateTimer = setTimeout(() => this.updateValue(value), this.timeout)
    },
    handleBlur(event) {
      const value = event.target.value
      this.updateValue(value)
    },
    updateValue(value) {
      $appCfg.log.debug(`update:value :: ${value}`)
      this.$emit('update:value', value)
    }
  }
}
</script>

<style>

</style>
