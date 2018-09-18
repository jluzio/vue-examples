<template>
  <li class="nav-item">
    <a :class="{'nav-link': true, 'active': active}" :id="testId+'-tab'" data-toggle="tab" :href="'#'+testId" role="tab">{{ testId }}</a>
  </li>
</template>

<script>
export default {
  name: 'TestItemTabLink',
  props: {
    testId: String,
    active: {default: false}
  }
}
</script>

<style>

</style>
