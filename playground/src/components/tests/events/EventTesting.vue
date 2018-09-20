<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <button @click="incrementCounterChildrenViaRef">Inc Child Counter via Ref</button>
        <button @click="incrementCounterChildrenViaEventBus">Inc Child Counter via Event Bus</button>
        <div>Parent Counter: {{ counter }}</div>
        <event-testing-target ref="child1" @increment-parent-counter="onIncrementCounter" />
        <event-testing-target ref="child2" @increment-parent-counter="onIncrementCounter" />
        <event-testing-target ref="child3" @increment-parent-counter="onIncrementCounter" />
      </li>
      <li class="list-group-item">
        <h5>checkboxChecked: {{ checkboxChecked }}</h5>
        <base-checkbox v-model="checkboxChecked" />
      </li>
      <li class="list-group-item">
        <h5>twoWay</h5>
        twoWayVar: {{ twoWayVar }}
        <event-testing-two-way-target :twoWayProp.sync="twoWayVar" />
      </li>
    </ul>
  </div>
</template>

<script>
// https://vuejs.org/v2/guide/components-custom-events.html
/*
Unlike components and props, event names will never be used as variable or property names in JavaScript,
 so there’s no reason to use camelCase or PascalCase.
Additionally, v-on event listeners inside DOM templates will be automatically transformed to lowercase (due to HTML’s case-insensitivity),
 so v-on:myEvent would become v-on:myevent – making myEvent impossible to listen to.
For these reasons, we recommend you always use kebab-case for event names.
*/

import {eventBus} from '@/services/eventBus'
import EventTestingTarget from './EventTestingTarget'
import EventTestingTwoWayTarget from './EventTestingTwoWayTarget'

export default {
  name: 'EventTesting',
  components: {EventTestingTarget, EventTestingTwoWayTarget},
  data() {
    return {
      counter: 0,
      checkboxChecked: false,
      twoWayVar: 'no way!'
    }
  },
  methods: {
    onIncrementCounter() {
      this.counter++
    },
    incrementCounterChildrenViaRef() {
      for (let childRef in this.$refs) {
        this.$refs[childRef].onIncrementCounter()
      }
    },
    incrementCounterChildrenViaEventBus() {
      eventBus.$emit('increment-child-counter')
    }
  }
}
</script>

<style>

</style>
