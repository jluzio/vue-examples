<template>
  <div>Prop[{{ propType }}]: {{ propValue }}</div>
</template>

<script>
import objects from '@/utils/objects'

// see: https://vuejs.org/v2/guide/components-props.html
// validation see: https://vuejs.org/v2/guide/components-props.html#Prop-Validation

export default {
  props: {
    stringProp: String,
    numberProp: Number,
    booleanProp: {
      type: Boolean,
      default: null
    },
    arrayProp: Array,
    objectProp: Object
  },
  computed: {
    propType() {
      let propType = null
      if (!objects.isNullOrUndefined(this.stringProp)) {
        propType = 'String'
      } else if (!objects.isNullOrUndefined(this.numberProp)) {
        propType = 'Number'
      } else if (!objects.isNullOrUndefined(this.booleanProp)) {
        propType = 'Boolean'
      } else if (!objects.isNullOrUndefined(this.arrayProp)) {
        propType = 'Array'
      } else if (!objects.isNullOrUndefined(this.objectProp)) {
        propType = 'Object'
      }
      return propType
    },
    propValue() {
      let propValue = null
      if (!objects.isNullOrUndefined(this.stringProp)) {
        propValue = this.stringProp
      } else if (!objects.isNullOrUndefined(this.numberProp)) {
        propValue = this.numberProp
      } else if (!objects.isNullOrUndefined(this.booleanProp)) {
        propValue = this.booleanProp
      } else if (!objects.isNullOrUndefined(this.arrayProp)) {
        propValue = this.arrayProp
      } else if (!objects.isNullOrUndefined(this.objectProp)) {
        propValue = this.objectProp
      }
      return propValue
    }
  }
}
</script>

<style>

</style>
