<template>
  <div class="container">
    <h5>DelayedUpdateInput Testing</h5>
    <div class="row btn-fix-container mt-2">
      <div class="row">
        <div>text: {{text}}</div>
        <delayed-update-input :value.sync="text" :timeout="1000" class="testy-class" placeholder="testing" />
        <input type="text" :value="expensiveComputedValue" class="form-control" placeholder="expensive computed value" >
      </div>
    </div>
  </div>
</template>

<script>
import DelayedUpdateInput from '@/components/DelayedUpdateInput.vue'

export default {
  components: { DelayedUpdateInput },
  data() {
    return {
      text: null,
      expensiveComputedValue: null
    }
  },
  watch: {
    text(value) {
      const superExpensiveComputedValue = this.text + Math.floor(Math.random() * 1000)
      setTimeout(() => { this.expensiveComputedValue = superExpensiveComputedValue }, 1000)
    }
  }
}
</script>

<style>

</style>
