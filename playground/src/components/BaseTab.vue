<template>
  <div :id="tabId" role="tabpanel" :class="{'tab-pane': true, 'fade': true, 'show': active, 'active': active}">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseTab',
  props: {
    tabId: {String, required: true},
    active: {Boolean, default: false}
  }
}
</script>

<style>
</style>
