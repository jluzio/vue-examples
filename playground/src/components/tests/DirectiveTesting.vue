<template>
  <ul class="list-group">
    <li class="list-group-item">square: <span v-square="number" /></li>
    <li class="list-group-item">dup: <span v-dup="text" /></li>
    <li class="list-group-item">appendTest-global: <span v-appendTest="text" /></li>
    <li class="list-group-item">appendTest-local: <span v-appendTestLocal="text" /></li>
    <li class="list-group-item">
      <h5>focus</h5>
      <button class="btn" @click="focusContentShow = !focusContentShow">Show/Hide</button>
      <div v-if="focusContentShow" class="form-group col-3 mx-auto">
        <input type="text" class="form-control" placeholder="not focused content..." />
        <input type="text" class="form-control" v-focus placeholder="focused content..." />
      </div>
    </li>
  </ul>
</template>

<script>
// imported in main.js / plugin : dup and focus
import SquareDirective from '@/directives/square.directive'
import AppendTestDirective from '@/directives/append-test.directive'

export default {
  name: 'DirectiveTesting',
  directives: {
    appendTestLocal: AppendTestDirective,
    square: SquareDirective
  },
  data() {
    return {
      number: 42,
      text: 'text',
      focusContentShow: false
    }
  }
}
</script>

<style>
</style>
