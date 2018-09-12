import Vue from 'vue'

Vue.directive('dup', {
  bind(el, binding, vnode) {
    el.innerHTML = binding.value + binding.value
  }
})
