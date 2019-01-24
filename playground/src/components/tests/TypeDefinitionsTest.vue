<template>
  <div>test</div>
</template>

<script>
// if working, intellisense knows var1 type, $appCfg type and validations options property
export default {
  data() {
    return {
      var1: 'value1'
    }
  },
  created() {
    console.log('var1', this.var1)
    this.$appCfg.log.debug('test')
  },
  validations: null
}
</script>

<style>

</style>
