<template>
  <div>
    <div>
      <button class="btn" @click="activeComponent = 'VeeValidationTesting'">VeeValidation</button>
      <button class="btn" @click="activeComponent = 'VeeValidationProviderTesting'">VeeValidationProvider</button>
      <button class="btn" @click="activeComponent = 'VuelidateTesting'">Vuelidate</button>
    </div>
    <component :is="activeComponent" />
  </div>
</template>

<script>
import VuelidateTesting from './validation/vuelidate/VuelidateTesting.vue'
import VeeValidationTesting from './validation/vee-validation/VeeValidationTesting.vue'
import VeeValidationProviderTesting from './validation/vee-validation/VeeValidationProviderTesting.vue'

export default {
  components: {
    VeeValidationTesting,
    VeeValidationProviderTesting,
    VuelidateTesting
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
