<template>
  <div>
    <div>
      <button @click="activeComponent = 'VeeValidationTesting'">VeeValidationTesting</button>
    </div>
    <component :is="activeComponent" />
  </div>
</template>

<script>
import VeeValidationTesting from './validation/vee-validation/VeeValidationTesting.vue'

export default {
  components: {
    VeeValidationTesting
  },
  data() {
    return {
      activeComponent: 'VeeValidationTesting'
    }
  }
}
</script>

<style scoped>
</style>
