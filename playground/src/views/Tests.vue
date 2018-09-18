<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <test-item-tab-link testId="datepicker" />
      <test-item-tab-link testId="dependency-injection" />
      <test-item-tab-link testId="directives" />
      <test-item-tab-link testId="model-testing" />
      <test-item-tab-link testId="event-testing" />
      <test-item-tab-link testId="dynamic-components" />
      <test-item-tab-link testId="async-components" />
    </ul>
    <div class="tab-content" id="myTabContent">
      <test-item-tab testId="datepicker">
        <datepicker field="Date" />
      </test-item-tab>
      <test-item-tab testId="dependency-injection">
        <dependency-injection-parent />
      </test-item-tab>
      <test-item-tab testId="directives">
        <directives />
      </test-item-tab>
      <test-item-tab testId="model-testing">
        <model-testing greeting-text="testy" />
      </test-item-tab>
      <test-item-tab testId="event-testing">
        <event-testing />
      </test-item-tab>
      <test-item-tab testId="dynamic-components">
        <dynamic-components />
      </test-item-tab>
      <test-item-tab testId="async-components">
        <async-components />
      </test-item-tab>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TestItemTabLink from '@/components/TestItemTabLink'
import TestItemTab from '@/components/TestItemTab'
import TestItem from '@/components/TestItem'

import HelloWorld from '@/components/HelloWorld'
import Datepicker from '@/components/Datepicker'
import DependencyInjectionParent from '@/components/DependencyInjectionParent'
import Directives from '@/components/Directives'
import ModelTesting from '@/components/ModelTesting'
import EventTesting from '@/components/EventTesting'
import DynamicComponents from '@/components/dynamic-components/DynamicComponents'
import AsyncComponents from '@/components/async-components/AsyncComponents'

export default {
  name: 'home',
  components: {
    TestItemTabLink,
    TestItemTab,
    TestItem,
    HelloWorld,
    Datepicker,
    DependencyInjectionParent,
    Directives,
    ModelTesting,
    EventTesting,
    DynamicComponents,
    AsyncComponents
  }
}
</script>
