<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        "header" slot: <slot name="header" />
      </li>
      <li class="list-group-item">
        default-slot: <slot />
      </li>
      <li class="list-group-item">
        "footer" slot: <slot name="footer" />
      </li>
      <li class="list-group-item">
        "with defaults" slot: <slot name="withDefaults">-with defaults-</slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SlotTestTarget'
}
</script>

<style>

</style>
