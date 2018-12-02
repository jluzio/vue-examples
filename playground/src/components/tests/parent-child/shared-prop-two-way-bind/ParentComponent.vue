<template>
  <div>
    <child-component :form="form" @update="onUpdatedChild($event)" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
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
  components: { ChildComponent },
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
      console.log('Parent :: event[update]')
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
