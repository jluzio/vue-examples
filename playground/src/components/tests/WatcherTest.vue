<template>
  <div class="test">
    <ul class="list-group">
      <li class="list-group-item">var1: {{var1}}</li>
      <li class="list-group-item">var2: {{var2}}</li>
      <ul class="messages">
        <li v-for="(msg,index) in messages" :key="index" class="list-group-item message">
          {{msg}}
        </li>
      </ul>
    </ul>
    <div>
      <input type="text" v-model="inputVal" />
      <button class="btn" @click="handleAddVar('var1')">add var1</button>
      <button class="btn" @click="handleAddVar('var2')">add var2</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      var1: null,
      var2: null,
      inputVal: null,
      messages: []
    }
  },
  watch: {
    var1(currentValue, previousValue) {
      this.handleVarChange('var1', currentValue, previousValue)
    },
    var2: {
      handler(currentValue, previousValue) {
        this.handleVarChange('var2', currentValue, previousValue)
      },
      immediate: true
    }
  },
  created() {
    this.var1 = 'val1.1'
    this.var2 = 'val2.1'
  },
  methods: {
    handleVarChange(varName, currentValue, previousValue) {
      this.messages.push(`${varName} changed from ${previousValue} to ${currentValue}`)
    },
    handleAddVar(varName) {
      this[varName] = this.inputVal
    }
  }
}
</script>

<style scoped>
.test {
  width: 50%;
  margin: 0 auto;
}
.messages li {
  border: 1px solid black;
}
</style>
