<template>
  <div class="row">
    <div :class="cssFields.fieldLeft">
      <label>{{data.id}}</label>
    </div>
    <div :class="cssFields.fieldRight">
      <input type="text" v-model="data.name" class="form-control">
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { DataObject, Item } from '../data-object'

export default {
  props: {
    item: Item,
    cssFields: null
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
