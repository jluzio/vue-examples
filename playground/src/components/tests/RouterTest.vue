<template>
  <div>
    <div>param.debug: {{$route.query.debug || $route.query.d}}</div>
    <div>debug: {{debug}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      debug: null
    }
  },
  created() {
    this.initDebug(this.$route)
  },
  watch: {
    '$route'(to, from) {
      this.initDebug(to)
    }
  },
  methods: {
    initDebug(route) {
      this.debug = ['true', '1'].includes(route.query.debug || route.query.d)
    }
  }
}
</script>

<style>
</style>
