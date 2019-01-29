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
      <div class="m-auto pt-2">
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
      item: new Item()
    }
  },
  methods: {
    changeItem() {
      const updatedItem = Object.assign(new Item(), this.item)
      const index = this.dataObject.items.findIndex(i => Number(i.id) === Number(this.item.id))
      if (index >= 0) {
        const dataObjectData = Object.assign(new DataObject(), this.dataObject)
        dataObjectData.items.splice(index, 1, updatedItem)
        console.log('update:dataObject', dataObjectData)
        this.$emit('update:dataObject', dataObjectData)
      }
    }
  }
}
</script>

<style>
.actions {
  text-align: center;
}
</style>
