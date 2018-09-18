<template>
  <div :class="{'tab-pane': true, 'fade': true, 'show': active, 'active': active}" :id="testId" role="tabpanel">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TestItemTab',
  props: {
    testId: String,
    active: {default: false}
  }
}
</script>

<style>
</style>
