<template>
  <div>
    <h5>Css</h5>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="text-css-scoped">text-css-scoped</span>
      </li>
      <li class="list-group-item">
        <span class="text-scss">text-scss</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.text-css-scoped {
  color: aqua;
}
</style>

<style lang="scss">
$font-stack:    Helvetica, sans-serif;
$primary-color: red;

.shared-scss {
  font: 100% $font-stack;
  color: $primary-color;
}
.text-scss {
  text-decoration: underline;
  @extend .shared-scss;
}
</style>
