<template>
  <div>
    <child-component-1 v-if="activeChild === 1" :form="form" :validationReqs="validationReqs" />
    <child-component-2 v-if="activeChild === 2" :form="form" :validationReqs="validationReqs" />
    <child-component-3 v-if="activeChild === 3" :form="form" :validationReqs="validationReqs" />
    <button @click="activeChild = 1">1</button>
    <button @click="activeChild = 2">2</button>
    <button @click="activeChild = 3">3</button>
    |
    <button @click="validate">Validate</button>
  </div>
</template>

<script>
import ChildComponent1 from './ChildComponent1.vue'
import ChildComponent2 from './ChildComponent2.vue'
import ChildComponent3 from './ChildComponent3.vue'

const defaultForm = {
  text: 'text-value'
}

export default {
  components: { ChildComponent1, ChildComponent2, ChildComponent3 },
  data() {
    return {
      form: defaultForm,
      validationSeqNumber: 0,
      validationReqs: [],
      activeChild: 1
    }
  },
  updated() {
    console.log('Parent :: updated()')
  },
  methods: {
    validate() {
      this.validationSeqNumber++
      const validationId = `Validation[${this.validationSeqNumber}, ${new Date().toISOString()}]`
      this.validationReqs.push(validationId)
    }
  }
}
</script>

<style>

</style>
