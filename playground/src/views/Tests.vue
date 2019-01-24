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
import DatepickerTest from '@/components/tests/DatepickerTest.vue'
import DependencyInjectionTest from '@/components/tests/DependencyInjectionTest.vue'
import DirectiveTest from '@/components/tests/DirectiveTest.vue'
import ModelTest from '@/components/tests/ModelTest.vue'
import EventTest from '@/components/tests/events/EventTest.vue'
import DynamicComponentTest from '@/components/tests/dynamic-components/DynamicComponentTest.vue'
import AsyncComponentTest from '@/components/tests/async-components/AsyncComponentTest.vue'
import PropsTest from '@/components/tests/PropsTest.vue'
import MixinTest from '@/components/tests/MixinTest.vue'
import SlotTest from '@/components/tests/slots/SlotTest.vue'
import TransitionTest from '@/components/tests/transitions/TransitionTest.vue'
import CssTest from '@/components/tests/CssTest.vue'
import RenderFunctionTest from '@/components/tests/RenderFunctionTest.vue'
import FilterTest from '@/components/tests/FilterTest.vue'
import StoreTest from '@/components/tests/StoreTest.vue'
import BootstrapTest from '@/components/tests/BootstrapTest.vue'
import ParentChildDataTest from '@/components/tests/ParentChildDataTest.vue'
import ParentChildEventTest from '@/components/tests/ParentChildEventTest.vue'
import EcmaScriptTest from '@/components/tests/EcmaScriptTest.vue'
import DelayedUpdateInputTest from '@/components/tests/DelayedUpdateInputTest.vue'
import WatcherTest from '@/components/tests/WatcherTest.vue'
import ValidationTest from '@/components/tests/ValidationTest.vue'
import I18nTest from '@/components/tests/I18nTest.vue'
import TypeDefinitionsTest from '@/components/tests/TypeDefinitionsTest.vue'

// Note: components in @/components with Base prefix get automatically loaded due to global-components.js
const TEST_COMPONENTS = {
  DatepickerTest,
  DependencyInjectionTest,
  DirectiveTest,
  ModelTest,
  EventTest,
  DynamicComponentTest,
  AsyncComponentTest,
  PropsTest,
  MixinTest,
  SlotTest,
  TransitionTest,
  CssTest,
  RenderFunctionTest,
  FilterTest,
  StoreTest,
  BootstrapTest,
  ParentChildDataTest,
  ParentChildEventTest,
  EcmaScriptTest,
  DelayedUpdateInputTest,
  WatcherTest,
  ValidationTest,
  I18nTest,
  TypeDefinitionsTest
}

export default {
  components: Object.assign({ TestTabLink }, TEST_COMPONENTS),
  data() {
    return {
      activeComponent: 'TypeDefinitionsTest',
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
      return tabId.replace('Test', '')
    },
    handleSelectedTab(tabId) {
      this.activeComponent = tabId
    }
  }
}
</script>
