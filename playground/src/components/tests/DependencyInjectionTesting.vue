<template>
  <div>
    <dependency-injection-testing-target />
  </div>
</template>

<script>
/* Oficial doc:
Provide and inject are primarily provided for advanced plugin / component library use cases.
It is NOT recommended to use them in generic application code.
*/

// Should be in some other file
import DependencyInjectionTestingTarget from './DependencyInjectionTestingTarget.vue'

class Foo {
  bar() {}
}

class FooA extends Foo {
  bar() {
    return 'bar-a'
  }
}

class FooB extends Foo {
  bar() {
    return 'bar-b'
  }
}

export default {
  name: 'DependencyInjectionTesting',
  props: {
    msg: String
  },
  provide() {
    return {
      foo: new FooA()
    }
  },
  components: {
    DependencyInjectionTestingTarget
  }
}

</script>
