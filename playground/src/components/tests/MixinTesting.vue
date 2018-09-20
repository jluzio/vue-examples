<template>
  <div>
    <h5>MixinTesting</h5>
    <ul class="list-group">
      <li v-for="(data, index) in [data1, data2, data3]" :key="index" class="list-group-item">data{{ index+1 }}: {{ data }}</li>
    </ul>
  </div>
</template>

<script>
// defining the mixing here for simplicity
const MyMixin = {
  created() {
    this.hello()
  },
  data() {
    return {
      data1: 'MyMixin-data1',
      data3: 'MyMixin-data3'
    }
  },
  methods: {
    hello() {
      // this.$log.debug()
      console.log('mixing hello')
    }
  }
}

export default {
  name: 'MixinTesting',
  data() {
    return {
      data1: 'data1',
      data2: 'data2'
    }
  },
  mixins: [MyMixin]
}
</script>

<style>

</style>
