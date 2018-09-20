<template>
  <li class="nav-item">
    <a :id="tabId+'-tab'" :href="'#'+tabId" data-toggle="tab" role="tab" :class="{'nav-link': true, 'active': active}">
      {{ computedTabName }}
    </a>
  </li>
</template>

<script>
export default {
  name: 'BaseTabLink',
  props: {
    tabId: {
      String,
      required: true
    },
    tabName: String,
    active: {
      Boolean,
      default: false
    }
  },
  computed: {
    computedTabName() {
      return this.tabName ? this.tabName : this.tabId
    }
  }
}
</script>

<style>

</style>
