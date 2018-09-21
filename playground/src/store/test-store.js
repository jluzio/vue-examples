import Vue from 'vue'

const log = Vue.prototype.$log.debug

export class TestData {
  constructor(id, data) {
    this.id = id
    this.data = data
  }
}

const state = {
  testData: new TestData(0, 'dummy-data')
}

const getters = {
  getTestData: state => state.testData
}

const mutations = {
  testData_submit(state, testData) {
    log('mutation: testData_submit')
    state.testData = testData
  },
  testData_clear(state) {
    log('mutation: testData_clear')
    state.testData = null
  }
}

const actions = {
  testData_submitAction: ({ dispatch, commit }, testData) => {
    log('action: testData_submitAction')
    commit('testData_submit', testData)
  },
  testData_clearAction: ({ dispatch, commit }, testData) => {
    log('action: testData_clearAction')
    commit('testData_clear')
  }
}

const options = {
  state,
  getters,
  mutations,
  actions
}

export default options
