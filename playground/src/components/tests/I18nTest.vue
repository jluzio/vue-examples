<template>
  <div>
    <div class="buttons">
      <div>locale: {{locale}}</div>
      <button v-for="loc of availableLocales" :key="loc"
        :class="{btn: true, 'btn-light': locale === loc, 'btn-primary': locale !== loc}"
        @click="locale = loc">
        {{loc}}
      </button>
    </div>
    <ul class="list-group">
      <li class="list-group item">
        message: {{$t('message')}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locale: this.$i18n.locale,
      availableLocales: ['en', 'pt_PT']
    }
  },
  watch: {
    locale(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>

<style scoped>
</style>
