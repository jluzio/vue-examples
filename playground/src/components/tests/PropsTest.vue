<template>
  <div>
    <props-test-target stringProp="textProp" />
    <props-test-target string-prop="text-prop" />
    <props-test-target :number-prop="42" />
    <props-test-target :boolean-prop="false" />
    <props-test-target :array-prop="[1, 2]" />
    <props-test-target :object-prop="{ name: 'Veronica', company: 'Veridian Dynamics' }" />
  </div>
</template>

<script>
import PropsTestTarget from './PropsTestTarget.vue'

export default {
  components: { PropsTestTarget }
}
</script>

<style>

</style>
