<template>
  <div class="x-tabs">
    <div class="x-buttons">
      <button @click="activeComponent = 'DcTab1'">Component 1</button>
      <button @click="activeComponent = 'DcTab2'">Component 2</button>
      <button @click="activeComponent = 'DcTab3'">Component 3</button>
    </div>
    <div class="x-tab">
      <div>
        <component :is="activeComponent" />
      </div>
      <div>
        keep-alive:
        <keep-alive>
          <component :is="activeComponent" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import DcTab1 from './DcTab1'
import DcTab2 from './DcTab2'
import DcTab3 from './DcTab3'

export default {
  name: 'DynamicComponentTesting',
  components: {
    DcTab1,
    DcTab2,
    DcTab3
  },
  data() {
    return {
      activeComponent: 'DcTab1'
    }
  }
}
</script>

<style>

</style>
