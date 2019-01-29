<template>
  <div class="test">
    <data-list :data-object.sync="dataObject" />
    <outside-data-list-changer :data-object.sync="dataObject" />
    <ul class="list-group">
      <li class="list-group-item" v-for="item of dataObject.items" :key="'li_item_' + item.id">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import DataList from './DataList.vue'
import OutsideDataListChanger from './OutsideDataListChanger.vue'
import { DataObject } from './data-object'

const dataObject = new DataObject()

export default {
  components: {
    DataList, OutsideDataListChanger
  },
  data() {
    return {
      dataObject: dataObject
    }
  }
}
</script>

<style>
.test {
  width: 50%;
  margin: 0 auto;
}
</style>
