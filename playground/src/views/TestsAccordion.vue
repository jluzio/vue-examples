<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="accordion" id="testsAccordion">
      <test-item test-id="datepicker" data-parent="#testsAccordion" show-card="true">
        <datepicker field="Date" />
      </test-item>
      <test-item test-id="dependency-injection-parent" data-parent="#testsAccordion">
        <dependency-injection-parent />
      </test-item>
      <test-item test-id="directives" data-parent="#testsAccordion">
        <directives />
      </test-item>
      <test-item test-id="model-testing" data-parent="#testsAccordion">
        <model-testing greeting-text="testy" />
      </test-item>
      <test-item test-id="event-testing" data-parent="#testsAccordion">
        <event-testing />
      </test-item>
      <test-item test-id="dynamic-components" data-parent="#testsAccordion">
        <dynamic-components />
      </test-item>
      <test-item test-id="async-components" data-parent="#testsAccordion">
        <async-components />
      </test-item>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import Datepicker from '@/components/Datepicker'
import DependencyInjectionParent from '@/components/DependencyInjectionParent'
import Directives from '@/components/Directives'
import ModelTesting from '@/components/ModelTesting'
import TestItem from '@/components/TestItem'
import EventTesting from '@/components/EventTesting'
import DynamicComponents from '@/components/dynamic-components/DynamicComponents'
import AsyncComponents from '@/components/async-components/AsyncComponents'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Datepicker,
    DependencyInjectionParent,
    Directives,
    ModelTesting,
    TestItem,
    EventTesting,
    DynamicComponents,
    AsyncComponents
  }
}
</script>
