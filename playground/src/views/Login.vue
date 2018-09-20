<template>
  <div class='container'>
    <form class="form-signin" @submit.prevent="login({ username, password })">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <div class="form-group">
        <template v-if="message != null">
          <p :class='"log " + message.type'>{{message.value}}</p>
        </template>
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
class Message {
  constructor(value, type) {
    this.value = value
    this.type = type
  }
}

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      message: null
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
          this.message = null
          if (this.$store.getters.isLoggedIn) {
            this.message = new Message('Success.', 'info')
            this.$router.push('/home')
          } else {
            this.message = new Message('Incorrect user or password.', 'error')
          }
        })
        .catch(() => {
          this.message = new Message('Unknown error.', 'error')
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
.error {
  color: red;
}
</style>
