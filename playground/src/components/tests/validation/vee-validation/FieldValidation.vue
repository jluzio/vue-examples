<template>
  <validation-provider :rules="rules">
    <div slot-scope="{ errors }">
      <label>{{name}}</label>
      <slot name="input" />
      errors: {{errors}}
      <validation-messages source="provider" :name="name" :messages="errors" />
    </div>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import ValidationMessages from './ValidationMessages.vue'

export default {
  components: {
    ValidationProvider,
    ValidationMessages
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
