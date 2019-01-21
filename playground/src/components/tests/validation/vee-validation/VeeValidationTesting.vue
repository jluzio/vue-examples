<template>
  <div class="test">
    <ul class="list-group">
      <li class="list-group-item">
        <form>
          <div class="notes">
            alternative field name for validation: data-vv-name
          </div>
          <div class="form-group">
            <label>fieldName</label>
            <input name="fieldName" v-validate="'required'"
              type="text" class="form-control">
            <span class="error" v-show="errors.has('fieldName')">{{ errors.first('fieldName') }}</span>
          </div>
          <div class="form-group">
            <simple-field :value.sync="text1" validate="required" name="text1" label="text1.name" />
            <simple-field :value.sync="text1" validate="required" data-vv-name="text1" label="text1.name" />
          </div>
          <div class="form-group">
            <field-validation name="text2">
              <input v-model="text2" name="text2" v-validate="'required|min:2'"
                type="text" class="form-control">
            </field-validation>
          </div>
          <div class="form-group">
            <label>text3</label>
            <input v-model="text3" name="text3" v-validate="'required|min:2'"
              type="text" class="form-control">
            <validation-messages name="text3" />
          </div>
          <div class="form-group">
            <simple-field :value.sync="email" validate="required|email" name="email" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>        
      </li>
    </ul>
  </div>
</template>

<script>
import SimpleField from './SimpleField.vue'
import FieldValidation from './FieldValidation.vue'
import ValidationMessages from './ValidationMessages.vue'

export default {
  components: {
    SimpleField,
    FieldValidation,
    ValidationMessages
  },
  data() {
    return {
      text1: '',
      text2: '',
      text3: '',
      email: '',
      foo: {
        bar: '',
        asd: ''
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
