<template>
  <base-card :card-id="testId" :card-header="cardHeader" :data-parent="dataParent" :showCard="showCard === 'true'">
    <slot />
  </base-card>
</template>

<script>
import BaseCard from './BaseCard'

export default {
  name: 'TestItem',
  props: ['testId', 'testName', 'dataParent', 'showCard'],
  components: {BaseCard},
  computed: {
    cardHeader() {
      return 'Test: ' + (this.testName ? this.testName : this.testId)
    }
  }
}
</script>

<style>
</style>
