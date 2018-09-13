<template>
  <div class="card">
    <div :id="headerId" class="card-header">
      <h5 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#'+collapseBodyId" aria-expanded="true" :aria-controls="collapseBodyId">
          {{ cardHeader }}
        </button>
      </h5>
    </div>
    <div :id="collapseBodyId" :class="{collapse: true, show: showCard}" :aria-labelledby="headerId" :data-parent="dataParent">
      <div class="card-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: ['cardId', 'cardHeader', 'dataParent', 'showCard'],
  computed: {
    headerId() {
      return 'header-' + this.cardId
    },
    collapseBodyId() {
      return 'collapse-body-' + this.cardId
    }
  }
}
</script>

<style>
</style>
