<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <div class="btn-group" role="group">
          <button class="btn" @click="incrementCounterChildrenViaRef">Inc using Ref</button>
          <button class="btn" @click="incrementCounterChildrenViaEventBus">Inc using Event Bus</button>
        </div>
        <div>Parent Counter: {{ counter }}</div>
        <div class="row col-6 mx-auto">
          <event-test-target class="col" ref="child1" @increment-parent-counter="onIncrementCounter" />
          <event-test-target class="col" ref="child2" @increment-parent-counter="onIncrementCounter" />
          <event-test-target class="col" ref="child3" @increment-parent-counter="onIncrementCounter" />
        </div>
      </li>
      <li class="list-group-item">
        <h5>checkboxChecked: {{ checkboxChecked }}</h5>
        <base-checkbox v-model="checkboxChecked" />
      </li>
      <li class="list-group-item">
        <h5>twoWay</h5>
        twoWayVar: {{ twoWayVar }}
        <event-test-two-way-target :twoWayProp.sync="twoWayVar" />
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

import { eventBus } from '@/services/event-bus'
import EventTestTarget from './EventTestTarget.vue'
import EventTestTwoWayTarget from './EventTestTwoWayTarget.vue'

export default {
  name: 'EventTest',
  components: { EventTestTarget, EventTestTwoWayTarget },
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
