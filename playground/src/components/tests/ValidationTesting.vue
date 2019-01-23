<template>
  <div>
    <div>
      <button class="btn" @click="activeComponent = 'VeeValidateTesting'">VeeValidate</button>
      <button class="btn" @click="activeComponent = 'VeeValidateProviderTesting'">VeeValidateProvider</button>
      <button class="btn" @click="activeComponent = 'VuelidateTesting'">Vuelidate</button>
    </div>
    <component :is="activeComponent" />
  </div>
</template>

<script>
import VuelidateTesting from './validation/vuelidate/VuelidateTesting.vue'
import VeeValidateTesting from './validation/vee-validation/VeeValidateTesting.vue'
import VeeValidateProviderTesting from './validation/vee-validation/VeeValidateProviderTesting.vue'

export default {
  components: {
    VeeValidateTesting,
    VeeValidateProviderTesting,
    VuelidateTesting
  },
  data() {
    return {
      activeComponent: 'VeeValidateTesting'
    }
  }
}
</script>

<style scoped>
</style>
