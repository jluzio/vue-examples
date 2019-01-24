import Vue from 'vue'
import $appCfg from '@/$appCfg'
import AppConfig from '@/config/app-config'

// options variables
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    // vuelidate
    validations?: Object;
  }
}

// instance variables
declare module 'vue/types/vue' {
  interface Vue {
    $appCfg: AppConfig
  }
}