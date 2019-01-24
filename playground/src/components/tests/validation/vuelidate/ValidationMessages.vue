<template>
  <div>
    <ul v-if="messages">
      <li v-for="(message,index) of messages" :key="index" :class="messageClasses">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script>
import validationUtil from '@/utils/vuelidate-util'

export default {
  props: {
    validation: { default: () => {} },
    nested: { type: Boolean, default: false },
    messageClasses: { default: 'error' }
  },
  computed: {
    messages() {
      return validationUtil.validationsMessages(this.validation, this.nested)
    }
  }
}
</script>

<style scoped>
.error {
  border: 1px solid red;
  display: block;
}
</style>
