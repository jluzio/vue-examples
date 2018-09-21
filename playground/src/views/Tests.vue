<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <base-tab-link tabId="props" />
      <base-tab-link tabId="model" />
      <base-tab-link tabId="css" />
      <base-tab-link tabId="bootstrap" />
      <base-tab-link tabId="event" />
      <base-tab-link tabId="directive" />
      <base-tab-link tabId="datepicker" />
      <base-tab-link tabId="slot" />
      <base-tab-link tabId="dynamic-component" />
      <base-tab-link tabId="async-component" />
      <base-tab-link tabId="transition" />
      <base-tab-link tabId="dependency-injection" />
      <base-tab-link tabId="mixin" />
      <base-tab-link tabId="render-function" />
      <base-tab-link tabId="filter" />
      <base-tab-link tabId="store" />
    </ul>
    <div class="pt-3"></div>
    <div class="tab-content" id="myTabContent">
      <base-tab tabId="datepicker">
        <datepicker field="Date" />
      </base-tab>
      <base-tab tabId="dependency-injection">
        <dependency-injection-testing />
      </base-tab>
      <base-tab tabId="directive">
        <directive-testing />
      </base-tab>
      <base-tab tabId="model">
        <model-testing greeting-text="testy" />
      </base-tab>
      <base-tab tabId="event">
        <event-testing />
      </base-tab>
      <base-tab tabId="dynamic-component">
        <dynamic-component-testing />
      </base-tab>
      <base-tab tabId="async-component">
        <async-component-testing />
      </base-tab>
      <base-tab tabId="props">
        <props-testing/>
      </base-tab>
      <base-tab tabId="mixin">
        <mixin-testing/>
      </base-tab>
      <base-tab tabId="slot">
        <slot-testing/>
      </base-tab>
      <base-tab tabId="transition">
        <transition-testing/>
      </base-tab>
      <base-tab tabId="css">
        <css-testing/>
      </base-tab>
      <base-tab tabId="render-function">
        <render-function-testing/>
      </base-tab>
      <base-tab tabId="filter">
        <filter-testing/>
      </base-tab>
      <base-tab tabId="store">
        <store-testing/>
      </base-tab>
      <base-tab tabId="bootstrap">
        <bootstrap-testing/>
      </base-tab>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import Datepicker from '@/components/Datepicker'
import DependencyInjectionTesting from '@/components/tests/DependencyInjectionTesting'
import DirectiveTesting from '@/components/tests/DirectiveTesting'
import ModelTesting from '@/components/tests/ModelTesting'
import EventTesting from '@/components/tests/events/EventTesting'
import DynamicComponentTesting from '@/components/tests/dynamic-components/DynamicComponentTesting'
import AsyncComponentTesting from '@/components/tests/async-components/AsyncComponentTesting'
import PropsTesting from '@/components/tests/PropsTesting'
import MixinTesting from '@/components/tests/MixinTesting'
import SlotTesting from '@/components/tests/slots/SlotTesting'
import TransitionTesting from '@/components/tests/transitions/TransitionTesting'
import CssTesting from '@/components/tests/CssTesting'
import RenderFunctionTesting from '@/components/tests/RenderFunctionTesting'
import FilterTesting from '@/components/tests/FilterTesting'
import StoreTesting from '@/components/tests/StoreTesting'
import BootstrapTesting from '@/components/tests/BootstrapTesting'

// Note: components in @/components with Base prefix get automatically loaded due to global-components.js

export default {
  name: 'home',
  components: {
    HelloWorld,
    Datepicker,
    DependencyInjectionTesting,
    DirectiveTesting,
    ModelTesting,
    EventTesting,
    DynamicComponentTesting,
    AsyncComponentTesting,
    PropsTesting,
    MixinTesting,
    SlotTesting,
    TransitionTesting,
    CssTesting,
    RenderFunctionTesting,
    FilterTesting,
    StoreTesting,
    BootstrapTesting
  }
}
</script>
