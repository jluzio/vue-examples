export default {
  bind(el, binding, vnode) {
    el.innerHTML = Math.pow(binding.value, 2)
  }
}
