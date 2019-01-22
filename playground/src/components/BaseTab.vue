<template>
  <div :id="tabId" role="tabpanel" :class="{'tab-pane': true, 'fade': true, 'show': active, 'active': active}">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseTab',
  props: {
    tabId: { type: String, required: true },
    active: { type: Boolean, default: false }
  }
}
</script>

<style>
</style>
