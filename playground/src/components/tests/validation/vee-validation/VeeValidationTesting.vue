<template>
  <div class="test">
    <ul class="list-group">
      <li class="list-group-item">
        <form :data-vv-scope="validationScope">
          <div class="notes">
            alternative field name for validation: data-vv-name
          </div>
          <template>
            <div class="form-group">
              <label>fieldName</label>
              <input name="fieldName" v-validate="'required'"
                type="text" class="form-control">
              <span class="error" v-show="errors.has('fieldName', validationScope)">{{ errors.first('fieldName', validationScope) }}</span>
            </div>
            <div class="form-group">
              <simple-field :value.sync="text1" validate="required" name="text1" label="text1.name" />
              <simple-field :value.sync="text1" validate="required" data-vv-name="text1" label="text1.name" />
            </div>
            <div class="form-group">
              <simple-field :value.sync="email" validate="required|email" name="email" />
            </div>
            <div class="form-group">
              <ValidationProvider rules="required|min:2">
                <div slot-scope="{ errors }">
                  <label>text2</label>
                  <input v-model="text2" name="text2"
                    type="text" class="form-control">
                  <span id="error">{{ errors[0] }}</span>
                  <validation-messages :validation-errors="errors" name="text2" />
                </div>
              </ValidationProvider>
            </div>
            <div class="form-group">
              TODO: fix this
              <field-validation rules="required|min:3">
                <slot name="input">
                  <input v-model="text3" name="text3"
                    type="text" class="form-control">
                </slot>
              </field-validation>
            </div>
          </template>
        </form>
      </li>
      <li class="list-group-item">
        Errors: {{ errors }}
      </li>
      <li class="list-group-item">
        <ul class="list-group">
          <li class="message list-group-item" v-for="(error,index) of errors.all()" :key="index">
            Error: {{ error }}
          </li>
        </ul>
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
