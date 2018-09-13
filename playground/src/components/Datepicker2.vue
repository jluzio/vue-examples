<template>
  <div>
    <label>{{field}}:</label>
    <input type="text" class="datepicker" placeholder="Pick a date">
  </div>
</template>

<script>
export default {
  name: 'Datepicker',
  props: {
    field: String
  },
  mounted() {
    if (this.$jQuery) {
      this.$jQuery('.datepicker').datepicker()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
