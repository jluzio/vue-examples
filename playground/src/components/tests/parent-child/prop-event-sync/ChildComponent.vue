<template>
  <div class="container col-4">
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input :value="mail" @input="$emit('update:mail', $event.target.value)" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select :value="select1" @input="$emit('update:select1', $event.target.value)" class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect2">Example multiple select</label>
        <select :value="select2" @input="$emit('update:select2', $event.target.value)" multiple class="form-control" id="exampleFormControlSelect2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea :value="textarea" @input="$emit('update:textearea', $event.target.value)" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['mail', 'select1', 'select2', 'textarea'],
  computed: {
    form() {
      console.log('prop', this.prop)
      return this.prop
    }
  },
  updated() {
    console.log('Child :: updated()')
  }
}
</script>

<style>
</style>
