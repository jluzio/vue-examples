<template>
  <div>
    <ul v-if="resolvedMessages">
      <li v-for="(message,index) of resolvedMessages" :key="index" :class="messageClasses">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script>
const DEFAULT_VALUE = 'default'
const Filters = {
  First: 'first',
  All: 'all'
}

export default {
  props: {
    filter: { type: String, default: DEFAULT_VALUE },
    name: { type: String, default: null },
    messages: Array,
    messageClasses: { default: 'error' }
  },
  computed: {
    resolvedMessages() {
      let resolved = []
      if (this.resolvedFilter === Filters.All) {
        resolved.push(...this.messages)
      } else if (this.resolvedFilter === Filters.First) {
        resolved.push(...this.messages.slice(0, 1))
      }
      resolved = resolved.map(m => m.replace('{field}', this.name))
      return resolved
    },
    resolvedFilter() {
      return this.filter === DEFAULT_VALUE ? Filters.All : this.filter
    }
  }
}
</script>

<style scoped>
.error {
  border: 1px solid red;
  display: block;
}
</style>
