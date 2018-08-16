<template>
  <div>
    <dependency-injection-child />
  </div>
</template>

<script>
/* Oficial doc: 
Provide and inject are primarily provided for advanced plugin / component library use cases. 
It is NOT recommended to use them in generic application code.
*/

// Should be in some other file
class Foo {
  bar() {}
}

class FooA extends Foo {
  bar() {
    return "bar-a"
  }
}

class FooB extends Foo {
  bar() {
    return "bar-b"
  }
}

import DependencyInjectionChild from './DependencyInjectionChild'

export default {
  name: 'DependencyInjectionParent',
  props: {
    msg: String
  },
  provide() {
    return {
      foo: new FooA()
    }
  },
  components: {
    DependencyInjectionChild
  }
}

</script>
