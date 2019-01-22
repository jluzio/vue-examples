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
              <label>fieldName</label>
              <input name="fieldName" v-validate="'required|alpha|min:3'"
                type="text" class="form-control">
              <span class="error" v-show="errors.has('fieldName')">{{ errors.first('fieldName') }}</span>
            </div>
            <div class="col form-group">
              <label>fieldName2</label>
              <input name="fieldName2" v-validate.continues="'required|alpha|min:3'"
                type="text" class="form-control">
              <span class="error" v-show="errors.has('fieldName2')">{{ errors.collect('fieldName2') }}</span>
            </div>
            <div class="form-group col">
              <simple-field :value.sync="email" validate="required|email" name="email" />
            </div>
          </div>
          <div class="row">
            <div class="col form-group">
              <label>default::text1</label>
              <input v-model="text1" name="text1" v-validate="'required|alpha|min:3'"
                type="text" class="form-control">
              <validation-messages name="text1" />
            </div>
            <div class="col form-group">
              <label>default::text2</label>
              <input v-model="text2" name="text2" v-validate.continues="'required|alpha|min:3'"
                type="text" class="form-control">
              <validation-messages name="text2" filter="collect" />
            </div>
            <div class="col form-group">
              <ValidationProvider rules="required|alpha|min:3">
                <div slot-scope="{ errors }">
                  <label>provider::text3</label>
                  <input v-model="text3" name="text3"
                    type="text" class="form-control">
                  <span id="error" v-if="false">{{ errors[0] }}</span>
                  <validation-messages source="provider" :messages="errors" name="text3" />
                </div>
              </ValidationProvider>
            </div>
          </div>
          <div class="row">
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
import { ValidationProvider } from 'vee-validate'
import SimpleField from './SimpleField.vue'
import FieldValidation from './FieldValidation.vue'
import ValidationMessages from './ValidationMessages.vue'

export default {
  components: {
    ValidationProvider,
    SimpleField,
    FieldValidation,
    ValidationMessages
  },
  data() {
    return {
      validationScope: null,
      text1: null,
      text2: null,
      text3: null,
      email: null,
      foo: {
        bar: null,
        asd: null
      }
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
</style>
