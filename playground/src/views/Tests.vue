<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <DatePicker field="Date" />
    <dependency-injection-parent />
    <directives />
    <model />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import DatePicker from '@/components/DatePicker'
import DependencyInjectionParent from '@/components/DependencyInjectionParent'
import Directives from '@/components/Directives'
import Model from '@/components/Model'

export default {
  name: 'home',
  components: {
    HelloWorld,
    DatePicker,
    DependencyInjectionParent,
    Directives,
    Model
  }
}
</script>
