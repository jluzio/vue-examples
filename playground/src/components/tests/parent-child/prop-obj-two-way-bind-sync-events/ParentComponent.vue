<template>
  <div>
    <p>Note: v-bind.sync="form" is shorthand for v-bind:'var1..N'.sync="form.'var1..N'"</p>
    <child-component v-bind:form.sync="form" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'
const defaultForm = {
  mail: 'parent@server.org',
  select1: [],
  select2: [],
  textarea: '',
  varHolder: {
    var: ''
  }
}

export default {
  components: {ChildComponent},
  data() {
    return {
      form: defaultForm
    }
  },
  updated() {
    console.log('Parent :: updated()')
  },
  methods: {
    updateForm(event) {
      console.log('Parent :: updateForm()', event)
    }
  }
}
</script>

<style>

</style>
