export default {
  bind(el, binding, vnode) {
    el.innerHTML = binding.value + binding.value
  }
}
