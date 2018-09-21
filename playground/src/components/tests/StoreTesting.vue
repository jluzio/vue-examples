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
            state.testData: {{ testDataInStore }}
          </li>
          <li class="list-group-item">
            getters.testData: {{ getTestData() }}
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
            <label>Id</label>
            <p>{{ testDataForm.id }}</p>
          </div>
          <div class="col">
            <label for="inputData">Data</label>
            <input id="inputData" v-model="testDataForm.data" type="text" class="form-control" placeholder="data">
          </div>
        </div>
        <div v-else class="form-row">
          <div class="col-3">
            <label>Id</label>
            <p>{{ testDataForm.id }}</p>
          </div>
          <div class="col">
            <label>Data</label>
            <p>{{ testDataForm.data }}</p>
          </div>
        </div>
        <div class="row btn-fix-container mt-2">
          <div class="row">
            <button class="btn btn-primary" @click="loadTestData">loadTestData</button>
            <button class="btn btn-primary" @click="editTestData">editTestData</button>
          </div>
          <div class="row">
            <button class="btn" @click="testData_clear()">Mutation: Clear</button>
            <button class="btn" :disabled="!editable" @click="mutationTestDataSubmit()">Mutation: Submit & Load</button>
            <button class="btn" :disabled="!editable" @click="mutationTestDataSubmit(false)">Mutation: Submit & No Load</button>
          </div>
          <div class="row">
            <button class="btn" @click="testData_clearAction()">Action: Clear</button>
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
      testDataForm: null,
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
      testDataInStore: state => state.testModule.testData
    })
  },
  methods: {
    loadTestData() {
      this.editable = false
      const loadedTestData = this.getTestData()
      this.testDataForm = loadedTestData !== null ? loadedTestData : this.testDataForm = new TestData(-1, '')
    },
    editTestData() {
      this.editable = true
      this.testDataForm = objects.mergeProperties(TestData.prototype, this.testDataForm)
      this.testDataForm.id++
    },
    mutationTestDataSubmit(load = true) {
      this.testData_submit(this.testDataForm)
      if (load) {
        this.loadTestData()
      }
    },
    actionTestDataSubmit(load = true) {
      this.testData_submitAction(this.testDataForm)
      if (load) {
        this.loadTestData()
      }
    },
    storeModuleStateTest() {
      return this.$store.state.testModule.testData
    },
    storeModuleGetterTest() {
      return this.$store.getters.getTestData
    },
    ...mapGetters([
      'isLoggedIn',
      'getTestData'
    ]),
    ...mapMutations([
      'testData_submit',
      'testData_clear'
    ]),
    ...mapActions([
      'testData_submitAction',
      'testData_clearAction'
    ])
  }
}
</script>

<style>

</style>
