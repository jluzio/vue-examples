<template>
  <async-loaded-component />
</template>

<script>

export default {
  name: 'AsyncComponents',
  components: {
    AsyncLoadedComponent: import('./AsyncLoadedComponent.vue')
  }
}
</script>

<style>

</style>
