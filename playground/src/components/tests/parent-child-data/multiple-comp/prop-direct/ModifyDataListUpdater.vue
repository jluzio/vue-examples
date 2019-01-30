<template>
  <div class="outside-datalist-changer">
    <div class="row">
      <div :class="cssFields.fieldLeft">
        <select v-model="item.id" class="form-control">
          <option v-for="id of ids" :key="id" :value="id">{{id}}</option>
        </select>
      </div>
      <div :class="cssFields.fieldRight">
        <input type="text" v-model="item.name" class="form-control" />
      </div>
    </div>
    <div class="row actions">
      <div :class="cssFields.actions">
        <button @click="handleUpdate" class="btn btn-primary">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { DataObject, Item } from '../data-object'

export default {
  props: {
    dataObject: DataObject,
    cssFields: null
  },
  data() {
    return {
      item: new Item()
    }
  },
  computed: {
    ids() {
      return this.dataObject.items.map(item => item.id)
    }
  },
  methods: {
    handleUpdate() {
      const updatedItem = this.item
      const index = this.dataObject.items.findIndex(i => Number(i.id) === Number(this.item.id))
      if (index >= 0) {
        this.dataObject.items.splice(index, 1, updatedItem)
      }
    }
  }
}
</script>

<style>
</style>
