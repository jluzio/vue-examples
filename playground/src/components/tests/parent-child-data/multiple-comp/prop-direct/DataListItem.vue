<template>
  <div class="row">
    <div :class="cssFields.fieldLeft">
      <label>{{item.id}}</label>
    </div>
    <div :class="cssFields.fieldRight">
      <input type="text" v-model="item.name" class="form-control">
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
  }
}
</script>

<style>
</style>
