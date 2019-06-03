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
      <li class="list-group-item">
        <button class="btn btn-primary" @click="includeColorClass = !includeColorClass">includeColorClass</button>
        <button class="btn btn-primary" @click="includeBorderClass = !includeBorderClass">includeBorderClass</button>
        <span class="cssTestBlock" :class="{colorClass: includeColorClass, borderClass: includeBorderClass}">Var Test 1</span>
        <span class="cssTestBlock" :class="['colorClass', {borderClass: includeBorderClass}]">Var Test 2</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      includeColorClass: true,
      includeBorderClass: false
    }
  }
}
</script>

<style scoped>
.text-css-scoped {
  color: aqua;
}
.cssTestBlock {
  display: inline-block;
  width: 100px;
  height: 50px;
  margin: 0 10px;
}
.colorClass {
  background-color: red;
}
.borderClass {
  border: 5px solid green;
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
