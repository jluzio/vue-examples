<template>
  <div>
    <div>
      <button class="btn" @click="activeComponent = 'VeeValidateTest'">VeeValidate</button>
      <button class="btn" @click="activeComponent = 'VeeValidateProviderTest'">VeeValidateProvider</button>
      <button class="btn" @click="activeComponent = 'VuelidateTest'">Vuelidate</button>
    </div>
    <component :is="activeComponent" />
  </div>
</template>

<script>
import VuelidateTest from './validation/vuelidate/VuelidateTest.vue'
import VeeValidateTest from './validation/vee-validate/VeeValidateTest.vue'
import VeeValidateProviderTest from './validation/vee-validate/VeeValidateProviderTest.vue'

export default {
  components: {
    VeeValidateTest,
    VeeValidateProviderTest,
    VuelidateTest
  },
  data() {
    return {
      activeComponent: 'VuelidateTest'
    }
  }
}
</script>

<style scoped>
</style>
