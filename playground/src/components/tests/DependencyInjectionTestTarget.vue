<template>
  <div>
    {{ foo.bar() }}
  </div>
</template>

<script>
export default {
  inject: ['foo'],
  props: {
    msg: String
  },
  mounted() {
    console.log('var: ', this.foo.bar())
  }
}

</script>
