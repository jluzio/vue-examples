<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">{{ 'test' | uppercase }}</li>
      <li class="list-group-item">{{ '0123456789' | substring(1, 5) }}</li>
      <li class="list-group-item">{{ '0123456789' | substr(1, 5) | quote }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FilterTesting'
}
</script>

<style>

</style>
