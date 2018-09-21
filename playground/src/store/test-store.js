import Vue from 'vue'

const log = Vue.prototype.$log.debug

export class TestData {
  constructor(id, data) {
    this.id = id
    this.data = data
  }
}

const state = {
  objectData: new TestData(0, 'dummy-data'),
  simpleData: null
}

const getters = {
  test_getObjectData: state => state.objectData,
  test_getSimpleData: state => state.simpleData
}

const mutations = {
  test_mutation_objectData_submit(state, objectData) {
    log('mutation: test_mutation_objectData_submit')
    state.objectData = objectData
  },
  test_mutation_objectData_clear(state) {
    log('mutation: test_mutation_objectData_clear')
    state.objectData = null
  },
  test_mutation_simpleData_submit(state, simpleData) {
    log('mutation: test_mutation_simpleData_submit')
    state.simpleData = simpleData
  },
  test_mutation_simpleData_clear(state) {
    log('mutation: test_mutation_simpleData_clear')
    state.simpleData = null
  }
}

const actions = {
  test_action_objectData_submit: ({ dispatch, commit }, testData) => {
    log('action: test_action_objectData_submit')
    commit('test_mutation_objectData_submit', testData)
  },
  test_action_objectData_clear: ({ dispatch, commit }, testData) => {
    log('action: test_action_objectData_clear')
    commit('test_mutation_objectData_clear')
  },
  test_action_simpleData_submit: ({ dispatch, commit }, testData) => {
    log('action: test_action_simpleData_submit')
    commit('test_mutation_simpleData_submit', testData)
  },
  test_action_simpleData_clear: ({ dispatch, commit }, testData) => {
    log('action: test_action_simpleData_clear')
    commit('test_mutation_simpleData_clear')
  }
}

const options = {
  state,
  getters,
  mutations,
  actions
}

export default options
