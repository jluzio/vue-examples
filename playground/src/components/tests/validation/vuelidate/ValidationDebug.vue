<template>
  <div>
    $v: {{validationData}}
  </div>
</template>

<script>
export default {
  props: {
    validation: null,
    keys: null
  },
  computed: {
    validationData() {
      let data = this.validation
      if (this.keys) {
        data = {}
        for (let k of this.keys.split(',')) {
          data[k] = this.validation[k]
        }
      }
      return data
    }
  }
}
</script>

<style scoped>
.error {
  border: 1px solid red;
  display: block;
}
</style>
