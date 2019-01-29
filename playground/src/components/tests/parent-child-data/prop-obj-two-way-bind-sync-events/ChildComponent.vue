<template>
  <div class="container col-4">
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input v-model="formData.mail" @input="updateForm()" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">varHolder.var</label>
        <input v-model="formData.varHolder.var" @input="updateForm()" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
    </form>
  </div>
</template>

<script>
import objects from '@/utils/objects'

export default {
  props: ['form'],
  data() {
    return {
      formData: objects.clone(this.form)
    }
  },
  updated() {
    console.log('Child :: updated()')
  },
  methods: {
    updateForm() {
      console.log(`updateForm() : formData=${this.formData}`)
      this.$emit('update:form', Object.assign({}, this.formData))
    }
  }
}
</script>

<style>
</style>
