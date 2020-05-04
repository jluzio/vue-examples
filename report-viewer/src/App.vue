<template>
  <div id="app">
    <ReportViewer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ReportViewer from './components/ReportViewer.vue'

@Component({
  components: {
    ReportViewer
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
}
</style>
