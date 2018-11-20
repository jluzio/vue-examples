<template>
  <div class="container col-4">
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input :value="form.mail" @input="updateForm('mail', $event.target.value)" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">varHolder.var</label>
        <input :value="form.varHolder.var" @input="updateForm('varHolder.var', $event.target.value)" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
    </form>
  </div>
</template>

<script>
import objects from '@/utils/objects'
export default {
  props: ['form'],
  updated() {
    console.log('Child :: updated()')
  },
  methods: {
    updateForm(propertyPath, value) {
      const updatedForm = objects.clone(this.form)
      const varCtx = objects.getVarExpressionContext(updatedForm, propertyPath)
      varCtx.target[varCtx.targetProperty] = value
      console.log(`updateForm(${propertyPath}, ${value}) : updatedForm=${updatedForm}`)
      this.$emit('update:form', updatedForm)
    }
  }
}
</script>

<style>
</style>
