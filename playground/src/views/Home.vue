<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <DatePicker field="Date" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DatePicker from '@/components/DatePicker.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    DatePicker
  }
}
</script>
