<template>
  <input
    type="checkbox"
    v-bind:checked="checked"
    v-on:change="$emit('change', $event.target.checked)"
  />
</template>

<script>
/*
https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model
By default, v-model on a component uses value as the prop and input as the event,
 but some input types such as checkboxes and radio buttons may want to use the value attribute for a different purpose.
Using the model option can avoid a conflict in such cases:
*/
export default {
  props: {
    checked: Boolean
  },
  model: {
    prop: 'checked',
    event: 'change'
  }
}
</script>

<style>

</style>
