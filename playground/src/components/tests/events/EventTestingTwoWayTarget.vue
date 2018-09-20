<template>
  <div>
    <div>twoWayProp: {{ twoWayProp }}</div>
    <div><input ref="inputRef" type="text" :value="twoWayProp"></div>
    <div><button @click="$emit('update:twoWayProp', $refs.inputRef.value)">Update</button></div>
  </div>
</template>

<script>
export default {
  name: 'EventTestingTwoWayTarget',
  props: {
    twoWayProp: String
  }
}
</script>

<style>

</style>
