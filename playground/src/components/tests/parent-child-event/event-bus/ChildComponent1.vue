<template>
  <child-component id="child-1" :form="form" :eventBus="eventBus" />
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: { ChildComponent },
  props: ['form', 'eventBus']
}
</script>
