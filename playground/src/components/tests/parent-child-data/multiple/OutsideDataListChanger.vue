<template>
  <div class="outside-datalist-changer">
    <div class="row">
      <div class="col-3">
        <input type="text" v-model="item.id" />
      </div>
      <div class="col-9">
        <input type="text" v-model="item.name" />
      </div>
    </div>
    <div class="row actions">
      <div class="ml-3 col-6">
        <button @click="changeItem" class="btn btn-primary">change item</button>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { DataObject, Item } from './data-object'

export default {
  props: {
    dataObject: DataObject
  },
  data() {
    return {
      item: { id: 0, name: null }
    }
  },
  methods: {
    changeItem() {
      const updatedItem = Object.assign(new Item(), this.item)
      const index = this.dataObject.items.filter(i => i.id === this.item.id)
      this.dataObject.items.splice(index, 1, updatedItem)
    }
  }
}
</script>

<style>
.actions {
  text-align: center;
}
</style>
