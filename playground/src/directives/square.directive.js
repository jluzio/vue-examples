import Vue from 'vue'

Vue.directive('square', {
  bind(el, binding, vnode) {
    el.innerHTML = Math.pow(binding.value, 2)
  }
})
