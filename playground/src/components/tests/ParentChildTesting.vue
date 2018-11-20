<template>
  <div class="x-tabs">
    <div class="btn-group" role="group">
      <button @click="activeComponent = 'EventsParentComponent'" class="btn">Events</button>
      <button @click="activeComponent = 'GlobalUpdateEventParentComponent'" class="btn">Global Update Event</button>
    </div>
    <div class="">
      <component :is="activeComponent" />
    </div>
  </div>
</template>

<script>
import EventsParentComponent from './parent-child/prop-event-sync/ParentComponent'
import GlobalUpdateEventParentComponent from './parent-child/global-update-event/ParentComponent'

export default {
  components: {EventsParentComponent, GlobalUpdateEventParentComponent},
  data() {
    return {
      activeComponent: null
    }
  }
}
</script>

<style>

</style>
