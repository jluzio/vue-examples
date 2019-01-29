<template>
  <div class="data-list">
    <data-list-item v-for="item of dataObject.items" :key="item.id" :item.sync="item" />
  </div>
</template>

<script>
import DataListItem from './DataListItem.vue'
// eslint-disable-next-line no-unused-vars
import { DataObject, Item } from './data-object'

export default {
  components: { DataListItem },
  props: {
    dataObject: DataObject
  }
}
</script>

<style>

</style>
