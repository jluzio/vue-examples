<template>
  <div class="row">
    <div class="col-3">{{item.id}}</div>
    <div class="col-9">
      <input type="text" v-model="item.name">
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { DataObject, Item } from './data-object'

export default {
  props: {
    item: Item
  }
}
</script>

<style>
</style>
