<template>
  <div>
    <child-component :form="form" @updated-child="onUpdatedChild($event)" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'
const defaultForm = {
  mail: 'parent@server.org',
  select1: [],
  select2: [],
  textarea: ''
}

const watchListener = (property) => (val, oldVal) => {
  console.log(`Parent :: watchListener(${property}) ${oldVal} -> ${val}`)
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
    onUpdatedChild(event) {
      console.log('Parent :: event:updated-child')
    }
  },
  watch: {
    'form': { handler: watchListener('form') }
    // 'form': { handler: watchListener('form.mail') }
  }
}
</script>

<style>

</style>
