<template>
  <div>
    <ul>
      <li v-for="(error,index) of validationErrors" :key="index" class="error">
        {{ error.replace('{field}', name) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    validationErrors: null,
    name: { type: String, default: null },
    scope: { type: String, default: null }
  }
}
</script>

<style scoped>
.error {
  border: 1px solid red;
  display: block;
}
</style>
