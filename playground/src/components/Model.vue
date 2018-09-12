<template>
  <div>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Model',
  data() {
    return {
      message: null
    }
  }
}
</script>

<style>
</style>
