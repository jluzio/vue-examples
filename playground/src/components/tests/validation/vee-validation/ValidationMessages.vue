<template>
  <span class="error" v-show="errors.has(name)">{{ errors.first(name) }}</span>
</template>

<script>
export default {
  props: {
    name: { type: String, default: null }
  },
  updated() {
    const name = this.name
    // const name = 'text2'
    console.log('valMsgs: updated', {
      name: name,
      has: this.errors.has(name), 
      first: this.errors.first(name), 
      collect: this.errors.collect(name),
      errors: this.errors
    })
  }
}
</script>

<style scoped>
.error {
  border: 1px solid red;
  display: block;
}
</style>
