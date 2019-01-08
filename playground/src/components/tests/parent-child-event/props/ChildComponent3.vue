<template>
  <child-component id="child-3" :form="form" :validationReqs="validationReqs" />
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: { ChildComponent },
  props: ['form', 'validationReqs']
}
</script>
