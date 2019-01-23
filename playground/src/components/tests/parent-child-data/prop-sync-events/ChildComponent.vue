<template>
  <div class="container col-4">
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input :value="mail" @input="update('mail', $event)" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select :value="select1" @input="update('select1', $event)" class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect2">Example multiple select</label>
        <select v-model="select2TwoWayProp" multiple class="form-control" id="exampleFormControlSelect2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea :value="textarea" @input="update('textearea', $event)" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
import { twoWayBindingPropertyGenerator } from '@/utils/bindings'

export default {
  props: ['mail', 'select1', 'select2', 'textarea'],
  computed: {
    select2TwoWayProp: twoWayBindingPropertyGenerator.apply(this)('select2')
  },
  updated() {
    console.log('Child :: updated()')
  },
  methods: {
    update(field, event) {
      this.$emit('update:' + field, event.target.value)
    },
    // TODO: handle multiple values
    updateArrayProperty(field, event) {
      // console.log(JSON.stringify(event))
      // console.log(JSON.stringify(event.target))

      // this.$emit('update:' + field, event.target.value)
      this.$emit('update:' + field, this.data_select2)
    }
  }
}
</script>

<style>
</style>
