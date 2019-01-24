<template>
  <div>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <p>GreetingText is: {{ greetingText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    greetingText: null
  },
  data() {
    return {
      message: null
    }
  }
}
</script>

<style>
</style>
