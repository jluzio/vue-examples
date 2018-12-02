<template>
  <div>
    <div class="btn-group" role="group">
      <button @click="activeComponent = 'EmptyComponent'" class="btn">Empty</button>
      <button @click="activeComponent = 'AsyncComponent'" class="btn">Async</button>
      <button @click="activeComponent = 'CustomAsyncComponent'" class="btn">CustomAsync</button>
    </div>
    <component :is="activeComponent" />
  </div>
</template>

<script>
// WIP: see link below
// https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components

import LoadingComponent from './LoadingComponent.vue'
import ErrorComponent from './ErrorComponent.vue'
import EmptyComponent from './EmptyComponent.vue'

const CustomAsyncComponent = () => ({
  // The component to load (should be a Promise)
  component: import('./AsyncComponent.vue'),
  // A component to use while the async component is loading
  loading: LoadingComponent,
  // A component to use if the load fails
  error: ErrorComponent,
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000
})

export default {
  name: 'AsyncComponentTesting',
  components: {
    EmptyComponent,
    AsyncComponent: () => import('./AsyncComponent.vue'),
    CustomAsyncComponent
  },
  data() {
    return {
      activeComponent: 'EmptyComponent'
    }
  }
}
</script>

<style>

</style>
