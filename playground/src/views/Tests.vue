<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <datepicker field="Date" />
    <dependency-injection-parent />
    <directives />
    <model-testing greeting-text="testy" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import Datepicker from '@/components/Datepicker'
import DependencyInjectionParent from '@/components/DependencyInjectionParent'
import Directives from '@/components/Directives'
import ModelTesting from '@/components/ModelTesting'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Datepicker,
    DependencyInjectionParent,
    Directives,
    ModelTesting
  }
}
</script>
