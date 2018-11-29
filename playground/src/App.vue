<template>
  <div id="app">
    <div id="nav">
      <ul class="nav nav-tabs justify-content-center">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/tests">Tests</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/private/apiTest">Api Test</router-link>
        </li>
        <template v-if="$store.getters.isLoggedIn">
          <li class="nav-item">
            <a href="#" class="nav-link disabled">{{ $store.getters.username }}</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/logout">Logout</router-link>
          </li>
        </template>
        <template v-else>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </template>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.btn-fix-container .btn {
  margin: 2px;
}

</style>
