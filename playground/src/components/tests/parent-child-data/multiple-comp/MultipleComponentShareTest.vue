<template>
  <div class="test">
    <div class="row">
      <div class="col">
        <h3>prop-sync-data-list</h3>
        <prop-sync-data-list :data-object.sync="dataObject" :css-fields="cssFields" />
      </div>
      <div class="col">
        <h3>prop-direct-data-list</h3>
        <prop-direct-data-list :data-object="dataObject" :css-fields="cssFields" />
      </div>
    </div>
    <div class="row mt-2">
      <div class="col">
        <h3>prop-sync-data-list-updater</h3>
        <prop-sync-data-list-updater :data-object.sync="dataObject" :css-fields="cssFields" />
      </div>
      <div class="col">
        <h3>replace-prop-direct-data-list-updater</h3>
        <replace-prop-direct-data-list-updater :data-object="dataObject" :css-fields="cssFields" />
      </div>
      <div class="col">
        <h3>modify-prop-direct-data-list-updater</h3>
        <modify-prop-direct-data-list-updater :data-object="dataObject" :css-fields="cssFields" />
      </div>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="item of dataObject.items" :key="'li_item_' + item.id">
        {{item}}
      </li>
    </ul>
    <div :class="cssFields.actions">
      <button class="btn btn-secondary" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
import PropSyncDataList from './prop-sync/DataList.vue'
import PropDirectDataList from './prop-direct/DataList.vue'
import PropSyncDataListUpdater from './prop-sync/DataListUpdater.vue'
import ReplacePropDirectDataListUpdater from './prop-direct/ReplaceDataListUpdater.vue'
import ModifyPropDirectDataListUpdater from './prop-direct/ModifyDataListUpdater.vue'
// eslint-disable-next-line no-unused-vars
import { DataObject, Item } from './data-object'

export default {
  components: {
    PropSyncDataList,
    PropDirectDataList,
    PropSyncDataListUpdater,
    ReplacePropDirectDataListUpdater,
    ModifyPropDirectDataListUpdater
  },
  data() {
    return {
      dataObject: null,
      cssFields: {
        'fieldLeft': 'col-3 text-right',
        'fieldRight': 'col-9 text-left',
        'actions': 'mx-auto my-2'
      }
    }
  },
  created() {
    this.reset()
  },
  methods: {
    reset() {
      this.dataObject = new DataObject()
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  width: 75%;
  margin: 0 auto;
}
</style>
