<template>
  <div>
    <props-testing-target stringProp="textProp" />
    <props-testing-target string-prop="text-prop" />
    <props-testing-target :number-prop="42" />
    <props-testing-target :boolean-prop="false" />
    <props-testing-target :array-prop="[1, 2]" />
    <props-testing-target :object-prop="{ name: 'Veronica', company: 'Veridian Dynamics' }" />
  </div>
</template>

<script>
import PropsTestingTarget from './PropsTestingTarget'

export default {
  name: 'PropsTesting',
  components: {PropsTestingTarget}
}
</script>

<style>

</style>
