<template>
  <div class="data-list">
    <data-list-item v-for="item of dataObject.items" :key="item.id" :item.sync="item" :css-fields="cssFields" />
  </div>
</template>

<script>
import DataListItem from './DataListItem.vue'
// eslint-disable-next-line no-unused-vars
import { DataObject, Item } from '../data-object'

export default {
  components: { DataListItem },
  props: {
    dataObject: DataObject,
    cssFields: null
  }
}
</script>

<style>

</style>
