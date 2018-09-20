<template>
  <div>
    <h5>Store</h5>
    <ul class="list-group">
      <li class="list-group-item">
        isLoggedIn: {{ isLoggedIn }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StoreTesting',
  computed: {
    // ...mapGetters() if other computed values are necessary
    // or computed: mapGetters() if not
    ...mapGetters([
      'isLoggedIn'
      // ...
    ])
  }
}
</script>

<style>

</style>
