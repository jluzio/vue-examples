<template>
  <div class="container">
    <h5>Store</h5>
    <div class="row">
      <div class="col-3">
        <h5>Auth</h5>
        <ul class="list-group">
          <li class="list-group-item">
            state.username: {{ username }}
          </li>
          <li class="list-group-item">
            getters.isLoggedIn: {{ isLoggedIn() }}
          </li>
        </ul>
      </div>
      <div class="col-3">
        <h5>TestData</h5>
        <ul class="list-group">
          <li class="list-group-item">
            state.objectData: {{ objectDataInStore }} | state.simpleData: {{ simpleDataInStore }}
          </li>
          <li class="list-group-item">
            getters.objectData: {{ test_getObjectData() }} | getters.simpleData: {{ test_getSimpleData() }}
          </li>
          <li class="list-group-item">
            storeModuleStateTest: {{ storeModuleStateTest() }}
          </li>
          <li class="list-group-item">
            storeModuleGetterTest: {{ storeModuleGetterTest() }}
          </li>
        </ul>
      </div>
      <div class="col-6">
        <h5>TestData Form</h5>
        <div v-if="editable" class="form-row">
          <div class="col-3">
            <label>ObjectData.Id</label>
            <p>{{ objectDataForm.id }}</p>
          </div>
          <div class="col">
            <label>ObjectData.Data</label>
            <input v-model="objectDataForm.data" type="text" class="form-control" placeholder="data">
          </div>
          <div class="col">
            <label>SimpleData</label>
            <input v-model="simpleDataForm" type="text" class="form-control" placeholder="data">
          </div>
        </div>
        <div v-else class="form-row">
          <div class="col-3">
            <label>ObjectData.Id</label>
            <p>{{ objectDataForm.id }}</p>
          </div>
          <div class="col">
            <label>ObjectData.Data</label>
            <p>{{ objectDataForm.data }}</p>
          </div>
          <div class="col">
            <label>SimpleData</label>
            <p>{{ simpleDataForm }}</p>
          </div>
        </div>
        <div class="row btn-fix-container mt-2">
          <div class="row">
            <button class="btn btn-primary" @click="loadTestData">loadTestData</button>
            <button class="btn btn-primary" @click="editTestData">editTestData</button>
          </div>
          <div class="row">
            <button class="btn" @click="mutationTestDataClear()">Mutation: Clear</button>
            <button class="btn" :disabled="!editable" @click="mutationTestDataSubmit()">Mutation: Submit & Load</button>
            <button class="btn" :disabled="!editable" @click="mutationTestDataSubmit(false)">Mutation: Submit & No Load</button>
          </div>
          <div class="row">
            <button class="btn" @click="actionTestDataClear()">Action: Clear</button>
            <button class="btn" :disabled="!editable" @click="actionTestDataSubmit()">Action: Submit & Load</button>
            <button class="btn" :disabled="!editable" @click="actionTestDataSubmit(false)">Action: Submit & No Load</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import {TestData} from '@/store/test-store'
import objects from '@/utils/objects'
// const { mapState } = createNamespacedHelpers('default')
// const testMappers = createNamespacedHelpers('test')
// const mapStateTest = testMappers.mapState

export default {
  name: 'StoreTesting',
  data() {
    return {
      objectDataForm: null,
      simpleDataForm: null,
      editable: false
    }
  },
  created() {
    this.loadTestData()
  },
  computed: {
    /* --- Map Functions (mapState | mapGetters | mapActions) ---
    Can be used:
     - directly (computed: mapState(...))
     - with other methods using the spread form
     e.g.: computed: { methodX() {}, ...mapState(...), ...mapGetters(...), ...}
    */
    ...mapState({
      username: state => state.auth.username
    }),
    ...mapState({
      objectDataInStore: state => state.testModule.objectData,
      simpleDataInStore: state => state.testModule.simpleData
    })
  },
  methods: {
    loadTestData() {
      this.editable = false
      const loadedObjectData = this.test_getObjectData()
      this.objectDataForm = loadedObjectData !== null ? loadedObjectData : new TestData(-1, '')
      this.simpleDataForm = this.test_getSimpleData()
    },
    editTestData() {
      this.editable = true
      this.objectDataForm = objects.mergeProperties(TestData.prototype, this.objectDataForm)
      this.objectDataForm.id++
    },
    mutationTestDataSubmit(load = true) {
      this.test_mutation_objectData_submit(this.objectDataForm)
      this.test_mutation_simpleData_submit(this.simpleDataForm)
      if (load) {
        this.loadTestData()
      }
    },
    mutationTestDataClear(load = true) {
      this.test_mutation_objectData_clear()
      this.test_mutation_simpleData_clear()
      if (load) {
        this.loadTestData()
      }
    },
    actionTestDataSubmit(load = true) {
      this.test_action_objectData_submit(this.objectDataForm)
      this.test_action_simpleData_submit(this.simpleDataForm)
      if (load) {
        this.loadTestData()
      }
    },
    actionTestDataClear(load = true) {
      this.test_action_objectData_clear()
      this.test_action_simpleData_clear()
      if (load) {
        this.loadTestData()
      }
    },
    storeModuleStateTest() {
      return this.$store.state.testModule.objectData
    },
    storeModuleGetterTest() {
      return this.$store.getters.test_getObjectData
    },
    ...mapGetters([
      'isLoggedIn',
      'test_getObjectData',
      'test_getSimpleData'
    ]),
    ...mapMutations([
      'test_mutation_objectData_submit',
      'test_mutation_objectData_clear',
      'test_mutation_simpleData_submit',
      'test_mutation_simpleData_clear'
    ]),
    ...mapActions([
      'test_action_objectData_submit',
      'test_action_objectData_clear',
      'test_action_simpleData_submit',
      'test_action_simpleData_clear'
    ])
  }
}
</script>

<style>

</style>
