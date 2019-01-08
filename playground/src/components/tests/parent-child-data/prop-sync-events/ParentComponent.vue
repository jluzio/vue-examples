<template>
  <div>
    <p>Note: v-bind.sync="form" is shorthand for v-bind:'var1..N'.sync="form.'var1..N'"</p>
    <child-component v-bind.sync="form" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
const defaultForm = {
  mail: 'parent@server.org',
  select1: 3,
  select2: ['1', '2'],
  textarea: ''
}

/*
const watchListener = (property) => (val, oldVal) => {
  console.log(`Parent :: watchListener(${property}) ${oldVal} -> ${val}`)
}
*/

export default {
  components: { ChildComponent },
  data() {
    return {
      form: defaultForm
    }
  },
  updated() {
    console.log('Parent :: updated()')
  }
}
</script>

<style>

</style>
