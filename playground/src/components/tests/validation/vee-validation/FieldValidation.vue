<template>
  <validation-provider :rules="rules">
    <div slot-scope="{ errors }">
      <label>{{name}}</label>
      <slot name="input" />
      errors: {{errors}}
      <validation-provider-messages :messages="errors" :name="name" />
    </div>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import ValidationProviderMessages from './ValidationProviderMessages.vue'

export default {
  components: {
    ValidationProvider,
    ValidationProviderMessages
  },
  props: {
    name: { type: String, default: null },
    label: { type: String, default: null },
    rules: { type: String, default: null }
  }
}
</script>

<style scoped>
</style>
