<template>
  <div>
    <label>{{fieldLabel}}</label>
    <input :value="value" :id="id" :name="name" v-validate="validate"
      @input="$emit('update:value', $event.target.value)" @blur="$emit('update:value', $event.target.value)"
      :data-vv-name="dataVvName"
      :type="type" class="form-control">
    <span class="error" v-show="errors.has(fieldRef)">{{ errors.first(fieldRef) }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: null },
    validate: null,
    id: { type: String, default: null },
    name: { type: String, default: null },
    type: { type: String, default: 'text' },
    label: { type: String, default: null },
    dataVvName: { type: String, default: null }
  },
  computed: {
    fieldRef() {
      return this.name ? this.name : this.dataVvName
    },
    fieldLabel() {
      return this.label ? this.label : this.fieldRef
    }
  }
}
</script>

<style scoped>
.test {
  width: 50%;
  margin: 0 auto;
}
.messages li {
  border: 1px solid black;
}
.error {
  border: 1px solid red;
  display: block;
}
</style>
