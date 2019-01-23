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
  Collect: 'collect',
  All: 'all'
}

export default {
  inject: ['$validator'],
  props: {
    filter: { type: String, default: DEFAULT_VALUE },
    name: { type: String, default: null },
    messageClasses: { default: 'error' }
  },
  computed: {
    resolvedMessages() {
      let resolved = []
      if (this.resolvedFilter === Filters.All) {
        resolved.push(...this.errors.all())
      } else if (this.resolvedFilter === Filters.First && this.errors.has(this.name)) {
        resolved.push(this.errors.first(this.name))
      } else if (this.resolvedFilter === Filters.Collect && this.errors.has(this.name)) {
        resolved.push(...this.errors.collect(this.name))
      }
      return resolved
    },
    resolvedFilter() {
      return this.filter === DEFAULT_VALUE ? Filters.First : this.filter
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
