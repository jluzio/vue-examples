const twoWayBindingPropertyGenerator = () => (propertyName) => {
  return {
    get() {
      return this[propertyName]
    },
    set(value) {
      this.$emit('update:' + propertyName, value)
    }
  }
}

export { twoWayBindingPropertyGenerator }
