<template>
  <div class="x-tabs">
    <div class="btn-group" role="group">
      <button @click="activeComponent = 'DcTab1'" class="btn">Component 1</button>
      <button @click="activeComponent = 'DcTab2'" class="btn">Component 2</button>
      <button @click="activeComponent = 'DcTab3'" class="btn">Component 3</button>
    </div>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-2">
          <h5>default</h5>
          <component :is="activeComponent" />
        </div>
        <div class="col-2">
          <h5>keep-alive</h5>
          <keep-alive>
            <component :is="activeComponent" />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DcTab1 from './DcTab1.vue'
import DcTab2 from './DcTab2.vue'
import DcTab3 from './DcTab3.vue'

export default {
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
