<template>
  <div class="test">
    <ul class="list-group">
      <li class="list-group-item">
        <form>
          <div class="notes">
            | alternative field name for validation: data-vv-name
            | validationScope: data-vv-scope="_val_"
          </div>
          <div class="row">
            <div class="col form-group">
              Locales:
              <button class="btn" @click="locale = 'en'">en</button>
              <button class="btn" @click="locale = 'pt_PT'">pt_PT</button>
            </div>
          </div>
          <div class="row">
            <div class="col form-group">
              <label>fieldName</label>
              <input name="fieldName" v-validate="'required|alpha|min:3'" autofocus
                type="text" class="form-control" autocomplete="off">
              <span class="error" v-show="errors.has('fieldName')">
                <ul><li v-for="error of errors.collect('fieldName')" :key="error">{{error}}</li></ul>
              </span>
            </div>
            <div class="col form-group">
              <label>fieldName2</label>
              <input name="fieldName2" v-validate.continues="'required|alpha|min:3'" data-vv-delay="1500"
                type="text" class="form-control" autocomplete="off">
              <span class="error" v-show="errors.has('fieldName2')">
                <ul><li v-for="error of errors.collect('fieldName2')" :key="error">{{error}}</li></ul>
              </span>
            </div>
            <div class="form-group col">
              <simple-field :value.sync="email" validate="required|email" name="email" />
            </div>
          </div>
          <div class="row">
            <div class="col form-group">
              <label>default::text1</label>
              <input v-model="text1" name="text1" v-validate.immediate="'required|alpha|min:3'"
                type="text" class="form-control" autocomplete="off">
              <validation-messages name="text1" />
            </div>
            <div class="col form-group">
              <label>default::text2</label>
              <input v-model="text2" name="text2" v-validate.continues="'required|alpha|min:3'"
                type="text" class="form-control" autocomplete="off">
              <validation-messages name="text2" filter="collect" />
            </div>
            <div class="col form-group">
              <validation-provider rules="required|alpha|min:3">
                <div slot-scope="{ errors }">
                  <label>provider::text3</label>
                  <input v-model="text3" name="text3"
                    type="text" class="form-control" autocomplete="off">
                  <span id="error" v-if="false">{{ errors[0] }}</span>
                  <validation-provider-messages :messages="errors" name="text3" filter="all" />
                </div>
              </validation-provider>
            </div>
            <div class="col form-group">
              <validation-provider rules="required|alpha|min:3">
                <div slot-scope="{ errors }">
                  <label>provider::text3</label>
                  <input v-model="text3" name="text3"
                    type="text" class="form-control" autocomplete="off">
                  <span id="error" v-if="false">{{ errors[0] }}</span>
                  <validation-provider-messages :messages="errors" name="text3" filter="first" />
                </div>
              </validation-provider>
            </div>
          </div>
          <div class="row">
            <div class="col form-group">
              <label>delayedValField</label>
              <input name="delayedValField"
                v-validate="'required|alpha|max:3'"
                data-vv-delay="1000"
                :title="errors | errTipField('delayedValField', 'first')"
                type="text" class="form-control" autocomplete="off">
              <div>
                {{ fields.delayedValField }}
              </div>
            </div>
            <div class="col form-group" v-if="false">
              <field-validation name="fieldName3" rules="required|alpha|min:3">
                <input slot="input" name="fieldName3" type="text" class="form-control">
              </field-validation>
              <div>
                Note: Currently was not able to get it working with slots :(
              </div>
            </div>
          </div>
        </form>
      </li>
      <li class="list-group-item">
        <ul class="list-group">
          <li class="message list-group-item" v-for="(error,index) of errors.all()" :key="index">
            Error: {{ error }}
          </li>
        </ul>
      </li>
      <li class="list-group-item">
        Errors: {{ errors }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ValidationProvider, Validator } from 'vee-validate'
import SimpleField from './SimpleField.vue'
import FieldValidation from './FieldValidation.vue'
import ValidationMessages from './ValidationMessages.vue'
import ValidationProviderMessages from './ValidationProviderMessages.vue'
import localePtPt from 'vee-validate/dist/locale/pt_PT'
// import localeEn from 'vee-validate/dist/locale/en'
import $appCfg from '@/$appCfg'
import validationUtil from '@/utils/vee-validate-util'

export default {
  components: {
    ValidationProvider,
    SimpleField,
    FieldValidation,
    ValidationMessages,
    ValidationProviderMessages
  },
  data() {
    return {
      text1: null,
      text2: null,
      text3: null,
      email: null,
      foo: {
        bar: null,
        asd: null
      },
      locale: 'en'
    }
  },
  watch: {
    locale(locale) {
      const localesMap = {
        'en': null,
        'pt_PT': localePtPt
      }
      Validator.localize(locale, localesMap[locale])
    },
    'fields.delayedValField.pending': validationUtil.getPendingValidationHandler('delayedValField', 'handleValidation')
    /*
    'fields.delayedValField.pending'(value) {
      const field = this.fields.delayedValField
      console.log('field', JSON.stringify(field))
      if (field.dirty && !field.pending && field.valid) {
        $appCfg.libs.toasted.show('validated delayedValField', { position: 'top-center', duration: 2000 })
      }
    }
    */
  },
  methods: {
    handleValidation() {
      $appCfg.libs.toasted.show('validated delayedValField', { position: 'top-center', duration: 2000 })
    }
  }
}
</script>

<style scoped>
.test {
  width: 50%;
  margin: 0 auto;
}
.messages li {
  border: 1px solid black;
}
.error {
  border: 1px solid red;
  display: block;
}
input:valid {
  border-color: green;
}
input:invalid {
  border-color: red;
}
</style>
