<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <test-tab-link v-for="component of testComponentNames" :key="component"
        :tabId="component" :tab-name-fn="getTabName" :active="activeComponent === component"
        @click="handleSelectedTab" />
    </ul>
    <div class="pt-3"></div>
    <div class="tab-content" id="myTabContent">
      <div role="tabpanel" :class="{'tab-pane': true, 'fade': true, 'show': true, 'active': true}">
        <component :is="activeComponent" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TestTabLink from '@/components/tests/TestTabLink.vue'
import DatepickerTesting from '@/components/tests/DatepickerTesting.vue'
import DependencyInjectionTesting from '@/components/tests/DependencyInjectionTesting.vue'
import DirectiveTesting from '@/components/tests/DirectiveTesting.vue'
import ModelTesting from '@/components/tests/ModelTesting.vue'
import EventTesting from '@/components/tests/events/EventTesting.vue'
import DynamicComponentTesting from '@/components/tests/dynamic-components/DynamicComponentTesting.vue'
import AsyncComponentTesting from '@/components/tests/async-components/AsyncComponentTesting.vue'
import PropsTesting from '@/components/tests/PropsTesting.vue'
import MixinTesting from '@/components/tests/MixinTesting.vue'
import SlotTesting from '@/components/tests/slots/SlotTesting.vue'
import TransitionTesting from '@/components/tests/transitions/TransitionTesting.vue'
import CssTesting from '@/components/tests/CssTesting.vue'
import RenderFunctionTesting from '@/components/tests/RenderFunctionTesting.vue'
import FilterTesting from '@/components/tests/FilterTesting.vue'
import StoreTesting from '@/components/tests/StoreTesting.vue'
import BootstrapTesting from '@/components/tests/BootstrapTesting.vue'
import ParentChildDataTesting from '@/components/tests/ParentChildDataTesting.vue'
import ParentChildEventTesting from '@/components/tests/ParentChildEventTesting.vue'
import EcmaScriptTesting from '@/components/tests/EcmaScriptTesting.vue'
import DelayedUpdateInputTesting from '@/components/tests/DelayedUpdateInputTesting.vue'
import WatcherTesting from '@/components/tests/WatcherTesting.vue'
import ValidationTesting from '@/components/tests/ValidationTesting.vue'

// Note: components in @/components with Base prefix get automatically loaded due to global-components.js
const TEST_COMPONENTS = {
  DatepickerTesting,
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
  BootstrapTesting,
  ParentChildDataTesting,
  ParentChildEventTesting,
  EcmaScriptTesting,
  DelayedUpdateInputTesting,
  WatcherTesting,
  ValidationTesting
}

export default {
  components: Object.assign(
    {},
    { TestTabLink },
    TEST_COMPONENTS
  ),
  data() {
    return {
      activeComponent: 'ValidationTesting',
      testComponents: TEST_COMPONENTS
    }
  },
  computed: {
    testComponentNames() {
      return Object.keys(this.testComponents)
    }
  },
  methods: {
    getTabName(tabId) {
      return tabId.replace('Testing', '')
    },
    handleSelectedTab(tabId) {
      this.activeComponent = tabId
    }
  }
}
</script>
