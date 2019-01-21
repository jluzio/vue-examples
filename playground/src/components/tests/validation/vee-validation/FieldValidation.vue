<template>
  <div>
    <label>{{name}}</label>
    <slot />
    <validation-messages :name="name" />
  </div>
</template>

<script>
import ValidationMessages from './ValidationMessages.vue'
export default {
  components: {
    ValidationMessages
  },
  props: {
    name: { type: String, default: null },
    label: { type: String, default: null }
  }
}
</script>

<style scoped>
</style>
