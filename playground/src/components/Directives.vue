<template>
  <div>
    <div>square: <span v-square="number" /></div>
    <div>dup: <span v-dup="text" /></div>
    <div>appendTest-global: <span v-appendTest="text" /></div>
    <div>appendTest-local: <span v-appendTestLocal="text" /></div>
  </div>
</template>

<script>
import Vue from 'vue'
// imported in main.js
// import '@/directives/dup.directive'
import '@/directives/square.directive'
import AppendTestDirective from '@/directives/append-test.directive'

export default {
  name: 'Directives',
  directives: {
    appendTestLocal: Vue.directive(null, AppendTestDirective)
  },
  data() {
    return {
      number: 42,
      text: 'text'
    }
  }
}
</script>

<style>
</style>
