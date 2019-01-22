<template>
  <li class="nav-item">
    <a :id="tabId+'-tab'" :href="'#'+tabId" role="tab" :class="{'nav-link': true, 'active': active}"
      @click="handleClick($event)">
      {{ computedTabName }}
    </a>
  </li>
</template>

<script>
export default {
  props: {
    tabId: {
      type: String,
      required: true
    },
    tabName: String,
    active: {
      type: Boolean,
      default: false
    },
    tabNameFn: Function
  },
  computed: {
    computedTabName() {
      let tabName = this.tabName
      if (!tabName) {
        if (this.tabNameFn) {
          tabName = this.tabNameFn(this.tabId)
        } else {
          tabName = this.tabId
        }
      }
      return tabName
    }
  },
  methods: {
    handleClick(event) {
      event.preventDefault()
      this.$emit('click', this.tabId)
    }
  }
}
</script>

<style>

</style>
