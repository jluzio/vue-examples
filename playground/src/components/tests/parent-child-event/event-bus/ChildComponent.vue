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
import Vue from 'vue'
import $appCfg from '@/$appCfg'

export default {
  props: {
    id: String,
    form: Object,
    eventBus: Vue
  },
  created() {
    this.eventBus.$on('parent-event', this.validate)
  },
  destroyed() {
    this.eventBus.$off('parent-event', this.validate)
  },
  updated() {
    console.log('Child :: updated()')
  },
  methods: {
    validate(validationId) {
      const options = { position: 'top-center', duration: 2000 }
      const message = `${this.id} :: ${validationId}`
      $appCfg.lib.toasted.show(message, options)
    }
  }
}
</script>

<style>
</style>
