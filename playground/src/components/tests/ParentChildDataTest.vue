<template>
  <div class="x-tabs">
    <div class="btn-group" role="group">
      <button @click="activeComponent = 'PropSyncEventsParentComponent'" class="btn">Prop Sync Events</button>
      <button @click="activeComponent = 'PropObjSyncEventsParentComponent'" class="btn">Prop object Sync Events</button>
      <button @click="activeComponent = 'PropObjTwoWayBindSyncEventsComponent'" class="btn">Prop object Sync Events (two-way binding)</button>
      <button @click="activeComponent = 'SharedPropTwoWayBindParentComponent'" class="btn">Shared Prop two-way binding</button>
      <button @click="activeComponent = 'MultipleComponentShareTest'" class="btn">MultipleComponentShare</button>
    </div>
    <div class="">
      <component :is="activeComponent" />
    </div>
  </div>
</template>

<script>
import PropSyncEventsParentComponent from './parent-child-data/prop-sync-events/ParentComponent.vue'
import PropObjSyncEventsParentComponent from './parent-child-data/prop-obj-sync-events/ParentComponent.vue'
import PropObjTwoWayBindSyncEventsComponent from './parent-child-data/prop-obj-two-way-bind-sync-events/ParentComponent.vue'
import SharedPropTwoWayBindParentComponent from './parent-child-data/shared-prop-two-way-bind/ParentComponent.vue'
import MultipleComponentShareTest from './parent-child-data/multiple-comp/MultipleComponentShareTest.vue'

export default {
  components: {
    PropSyncEventsParentComponent,
    PropObjSyncEventsParentComponent,
    PropObjTwoWayBindSyncEventsComponent,
    SharedPropTwoWayBindParentComponent,
    MultipleComponentShareTest
  },
  data() {
    return {
      activeComponent: 'MultipleComponentShareTest'
    }
  }
}
</script>

<style>

</style>
