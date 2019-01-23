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
export default {
  props: {
    validation: { default: {} },
    global: { type: Boolean, default: false },
    messageClasses: { default: 'error' }
  },
  computed: {
    messages() {
      let messages = []
      if (this.global) {
        Object.keys(this.validation).forEach(fieldName => {
          if (!this.flagKey(fieldName)) {
            messages.push(...this.validationMessages(this.validation[fieldName], fieldName))
          }
        })
      } else {
        messages.push(...this.validationMessages(this.validation, null))
      }
      return messages
    }
  },
  methods: {
    validationMessages(validation, name) {
      let messages = []
      if (validation.$invalid) {
        for (let validationId in validation) {
          if (!this.flagKey(validationId) && !validation[validationId]) {
            const ctx = name ? `[${name}]` : ''
            messages.push(`Validation${ctx} :: ${validationId} failed`)
          }
        }
      }
      return messages
    },
    flagKey(key) {
      return key.startsWith('$')
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
