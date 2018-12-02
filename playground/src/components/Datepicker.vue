<template>
  <form disabled class="col-3 mx-auto">
    <div class="form-group">
      <label>{{field}}:</label>
      <input type="text" class="datepicker form-control" placeholder="Pick a date">
    </div>
  </form>
</template>

<script>
export default {
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
