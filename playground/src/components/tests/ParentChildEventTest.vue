<template>
  <div class="x-tabs">
    <div class="btn-group" role="group">
      <button @click="activeComponent = 'PropsParentComponent'" class="btn">Props</button>
      <button @click="activeComponent = 'EventBusParentComponent'" class="btn">EventBus</button>
    </div>
    <div class="">
      <component :is="activeComponent" />
    </div>
  </div>
</template>

<script>
import PropsParentComponent from './parent-child-event/props/ParentComponent.vue'
import EventBusParentComponent from './parent-child-event/event-bus/ParentComponent.vue'

export default {
  components: {
    PropsParentComponent,
    EventBusParentComponent
  },
  data() {
    return {
      activeComponent: null
    }
  }
}
</script>

<style>

</style>
