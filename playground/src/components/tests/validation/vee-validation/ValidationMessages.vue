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
const Sources = {
  ErrorBag: 'ErrorBag',
  Provider: 'Provider'
}
const Filters = {
  First: 'First',
  Collect: 'Collect',
  All: 'All'
}
const valEq = (s1, s2) => s1.toLowerCase() === s2.toLowerCase()

export default {
  inject: ['$validator'],
  props: {
    source: { type: String, default: DEFAULT_VALUE },
    filter: { type: String, default: DEFAULT_VALUE },
    name: { type: String, default: null },
    messages: null,
    messageClasses: { default: 'error' }
  },
  computed: {
    resolvedMessages() {
      let resolved = []
      if (valEq(this.resolvedSource, Sources.ErrorBag)) {
        if (valEq(this.resolvedFilter, Filters.All)) {
          resolved = this.errors.all()
        } else if (valEq(this.resolvedFilter, Filters.First)) {
          resolved = []
          if (this.errors.has(this.name)) {
            resolved.push(this.errors.first(this.name))
          }
        } else if (valEq(this.resolvedFilter, Filters.Collect)) {
          resolved = this.errors.collect(this.name)
        }
      } else if (valEq(this.resolvedSource, Sources.Provider)) {
        if (valEq(this.resolvedFilter, Filters.All)) {
          resolved = this.messages
        } else if (valEq(this.resolvedFilter, Filters.First)) {
          resolved = this.messages.slice(0, 1)
        }
        resolved = resolved.map(m => m.replace('{field}', this.name))
      }
      return resolved
    },
    resolvedSource() {
      return valEq(this.source, DEFAULT_VALUE) ? Sources.ErrorBag : this.source
    },
    resolvedFilter() {
      let resolved = null
      if (this.filter === DEFAULT_VALUE) {
        if (valEq(this.resolvedSource, Sources.ErrorBag)) {
          resolved = Filters.First
        } else if (valEq(this.resolvedSource, Sources.Provider)) {
          resolved = Filters.All
        }
      } else {
        resolved = this.filter
      }
      return resolved
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
