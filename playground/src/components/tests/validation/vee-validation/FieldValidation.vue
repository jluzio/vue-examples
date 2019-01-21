<template>
  <validation-provider :rules="rules">
    <slot>
      <div slot-scope="{ errors }">
        <label>{{name}}</label>
        <slot name="input" />
        <validation-messages :validation-errors="errors" :name="name" />
      </div>
    </slot>
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
    validationScope: { type: String, default: null },
    rules: { type: String, default: null }
  }
}
</script>

<style scoped>
</style>
