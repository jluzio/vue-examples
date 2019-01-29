<template>
  <div class="test">
    <data-list :data-object="dataObject" />
    <outside-data-list-changer :data-object="dataObject" />
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
}
</style>
