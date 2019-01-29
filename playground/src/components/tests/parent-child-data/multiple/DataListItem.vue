<template>
  <div class="row">
    <div class="col-3">{{data.id}}</div>
    <div class="col-9">
      <input type="text" v-model="data.name">
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { DataObject, Item } from './data-object'

export default {
  props: {
    item: Item
  },
  data() {
    return {
      itemData: Object.assign(new Item(), this.item)
    }
  },
  computed: {
    data() {
      return this.item
    }
  },
  updated() {
    return this.$emit('update:item', this.data)
  }
}
</script>

<style>
</style>
