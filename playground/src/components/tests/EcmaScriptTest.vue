<template>
  <div class="container">
    <h5>EcmaScript Test</h5>
    <div class="row btn-fix-container mt-2">
      <div class="row">
        <button class="btn btn-primary" @click="es2015Test.run()">es2015Test</button>
        <button class="btn btn-primary" @click="es2016Test.run()">es2016Test</button>
        <button class="btn btn-primary" @click="es2017Test.run()">es2017Test</button>
      </div>
    </div>
  </div>
</template>

<script>
import es2015Test from '@/tests/es2015-test'
import es2016Test from '@/tests/es2016-test'
import es2017Test from '@/tests/es2017-test'

export default {
  data() {
    return {
      es2015Test: es2015Test,
      es2016Test: es2016Test,
      es2017Test: es2017Test
    }
  }
}
</script>

<style>

</style>
