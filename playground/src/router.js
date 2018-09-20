import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import mutationTypes from './store/mutation-types'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Tests from './views/Tests.vue'
import ApiTest from './views/ApiTest.vue'

const log = Vue.prototype.$debug('authLog')

const authGuard = (to, from, next) => {
  log('authGuard')
  // const publicPages = ['/', '/home', '/login']
  // const isPublicPage = publicPages.indexOf(to.path) >= 0
  const isPrivatePage = to.path.startsWith('/private')

  if (to.path === '/logout') {
    store.dispatch('logout')
    next('/')
  } else if (store.getters.isLoggedIn) {
    next()
  } else if (isPrivatePage) {
    next('/login')
  } else {
    next()
  }
}

const verifyAutoLoginGuard = (to, from, next) => {
  log('verifyAutoLoginGuard')
  if (!store.getters.isLoggedIn) {
    const token = localStorage.getItem('authToken')
    const username = localStorage.getItem('username')
    if (token) {
      log('verifyAutoLoginGuard :: login using token')
      store.dispatch('autoLogin', { token, username })
    }
  }
  next()
}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/tests',
      name: 'tests',
      component: Tests
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/private/apiTest',
      name: 'apiTest',
      component: ApiTest
    }
  ]
})

router.beforeEach((to, from, next) => {
  verifyAutoLoginGuard(to, from, next)
  authGuard(to, from, next)
})

export default router
