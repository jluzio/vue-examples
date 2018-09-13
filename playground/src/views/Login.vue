<template>
  <div class='container'>
    <form class="form-signin" @submit.prevent="login({ username, password })">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <div class="form-group">
          <p class='error'>{{error}}</p>
          <p class='log'>{{log}}</p>
      </div>
      <label for="inputUsername" class="sr-only">Username</label>
      <input id="inputUsername" v-model="username" type="text" class="form-control" placeholder="Username" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input id="inputPassword" v-model="password" type="password" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      error: '',
      log: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })
        .then(() => {
          this.$log.debug('login.vue: handle response')
          if (this.$store.getters.isLoggedIn) {
            this.log = 'logged in'
            this.$router.push('/home')
          } else {
            this.log = 'not logged in'
          // this.$router.push('/home')
          }
        })
        .catch(() => {
          this.log = 'error'
        })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.form-signin {
  width: 50%;
  margin: 0 auto;
}
</style>
