<template>
  <async-loaded-component />
</template>

<script>
// WIP: see link below
// https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
export default {
  name: 'AsyncComponents',
  components: {
    AsyncLoadedComponent: import('./AsyncLoadedComponent.vue')
  }
}
</script>

<style>

</style>
