<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    DatePicker: <DatePicker />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DatePicker from './components/DatePicker.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    DatePicker
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
