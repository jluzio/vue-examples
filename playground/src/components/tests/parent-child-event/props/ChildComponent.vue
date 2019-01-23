<template>
  <div class="container col-4">
    <form>
      <h2>{{id}}</h2>
      <div class="form-group">
        <label for="input1">Text</label>
        <input v-model="form.text" type="text" class="form-control" id="input1" placeholder="text">
      </div>
    </form>
  </div>
</template>

<script>
import $appCfg from '@/$appCfg'

export default {
  props: {
    id: String,
    form: Object,
    validationReqs: Array
  },
  updated() {
    console.log('Child :: updated()')
  },
  watch: {
    /**
     * @param {Object[]} values
     */
    validationReqs(values) {
      const validationId = values[values.length - 1]
      const options = { position: 'top-center', duration: 2000 }
      const message = `${this.id} :: ${validationId}`
      $appCfg.libs.toasted.show(message, options)
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
