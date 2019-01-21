<template>
  <div>
    <div>
      <button @click="activeComponent = 'VeeValidationTesting'">VeeValidationTesting</button>
      <button @click="activeComponent = 'VeeValidationProviderTesting'">VeeValidationProviderTesting</button>
    </div>
    <component :is="activeComponent" />
  </div>
</template>

<script>
import VeeValidationTesting from './validation/vee-validation/VeeValidationTesting.vue'
import VeeValidationProviderTesting from './validation/vee-validation/VeeValidationProviderTesting.vue'

export default {
  components: {
    VeeValidationTesting,
    VeeValidationProviderTesting
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
