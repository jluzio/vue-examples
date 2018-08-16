<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <DatePicker field="Date" />
    <dependency-injection-parent />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DatePicker from '@/components/DatePicker.vue'
import DependencyInjectionParent from '@/components/DependencyInjectionParent.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    DatePicker,
    DependencyInjectionParent,
  }
}
</script>
