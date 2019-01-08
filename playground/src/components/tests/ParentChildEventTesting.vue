<template>
  <div class="x-tabs">
    <div class="btn-group" role="group">
      <button @click="activeComponent = 'PropsParentComponent'" class="btn">Props</button>
    </div>
    <div class="">
      <component :is="activeComponent" />
    </div>
  </div>
</template>

<script>
import PropsParentComponent from './parent-child-event/props/ParentComponent.vue'

export default {
  components: {
    PropsParentComponent
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
