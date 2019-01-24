<template>
  <div class="test">
    <ul class="list-group">
      <li class="list-group-item">
        <form>
          <div class="row">
            <div class="col form-group">
              <label>showValidationData: </label>
              <label class="radio-inline"><input type="radio" v-model="showValidationData" :value="true">active</label>
              <label class="radio-inline"><input type="radio" v-model="showValidationData" :value="false">inactive</label>
            </div>
          </div>
          <div class="row">
            <div class="col form-group">
              <label>text1</label>
              <input v-model="text1" type="text" :class="{'form-control': true, 'invalid': $v.text1.$invalid, 'valid': !$v.text1.$invalid}"
                :title="$v.text1 | valTip"
              />
              <ul>
                <li class="error" v-if="!$v.text1.required">required failed</li>
                <li class="error" v-if="!$v.text1.minLength">minLength failed</li>
              </ul>
              <validation-debug :validation="$v.text1" />
            </div>
            <div class="col form-group">
              <label>text2</label>
              <input v-model="text2" type="text" :class="{'form-control': true} | valClasses($v.text2)" :title="$v.text2 | valTip"
              />
              <validation-messages :validation="$v.text2" />
              <validation-debug :validation="$v.text2" keys="sameAsText1" />
            </div>
            <div class="col form-group">
              <label>text3</label>
              <input v-model="text3" type="text" :class="{'form-control': true} | valClasses($v.text3)" :title="$v.text3 | valTip"
              />
              <validation-messages :validation="$v.text3" />
              <validation-debug :validation="$v.text3" keys="sameAsText2" />
            </div>
          </div>
          <div class="row">
            <div class="col form-group">
              <label>dirtyCheckVal</label>
              <input v-model="$v.dirtyCheckVal.$model" type="text" class="form-control">
              <validation-messages :validation="$v.dirtyCheckVal" />
              <validation-debug :validation="$v.dirtyCheckVal" keys="$dirty" />
            </div>
            <div class="col form-group">
              <label>number1.lazy</label>
              <input v-model.number.lazy="number1" type="text" class="form-control">
              <validation-messages :validation="$v.number1" />
            </div>
            <div class="col form-group">
              <label>email</label>
              <input v-model="email" type="text" class="form-control">
              <validation-messages :validation="$v.email" />
            </div>
          </div>
          <div class="row">
            <div class="col form-group">
              <label>foo.bar</label>
              <input v-model="foo.bar" type="text" class="form-control">
              <validation-messages :validation="$v.foo.bar" />
              <validation-debug :validation="$v.foo.bar" keys="$invalid" />
              <validation-debug :validation="$v.foo.bar" v-if="showValidationData" />
            </div>
            <div class="col form-group">
              <label>foo.asd</label>
              <input v-model="foo.asd" type="text" class="form-control">
              <validation-messages :validation="$v.foo.asd" />
              <validation-debug :validation="$v.foo.bar" keys="$invalid" />
              <validation-debug :validation="$v.foo.asd" v-if="showValidationData" />
            </div>
            <div class="form-group col">
              <label>foo</label>
              <validation-messages :validation="$v.foo" :nested="true" />
              <validation-debug :validation="$v.foo" keys="$invalid" />
              <validation-debug :validation="$v.foo" v-if="showValidationData" />
            </div>
            <div class="form-group col">
              <label>all data</label>
              <validation-messages :validation="$v" :nested="true" />
              <validation-debug :validation="$v" keys="$invalid" />
              <validation-debug :validation="$v" v-if="showValidationData" />
            </div>
          </div>
          <div class="row">
            <div class="col form-group">
              $v.delayedUpdateVal:
              <delayed-update-input :value.sync="delayedUpdateVal" />
              <validation-messages :validation="$v.delayedUpdateVal" />
              <validation-debug :validation="$v.delayedUpdateVal" v-if="showValidationData" />
            </div>
            <div class="col form-group">
              $v.delayedUpdateVal2:
              <input type="text" v-model="delayedUpdateVal2" class="form-control">
              <validation-messages :validation="$v.delayedUpdateVal2" />
              <validation-debug :validation="$v.delayedUpdateVal2" keys="$pending" />
              <validation-debug :validation="$v.delayedUpdateVal2" v-if="showValidationData" />
            </div>
          </div>
        </form>
      </li>
      <li class="list-group-item" v-if="false">
        <validation-messages :validation="$v" :nested="true" />
      </li>
      <li class="list-group-item" v-if="false">
        $v: <code v-html="$v" />
      </li>
    </ul>
  </div>
</template>

<script>
import ValidationMessages from './ValidationMessages.vue'
import DelayedUpdateInput from '@/components/DelayedUpdateInput.vue'
import ValidationDebug from './ValidationDebug.vue'
import { required, minLength, between, sameAs, email } from 'vuelidate/lib/validators'
import validationUtil from '@/utils/vuelidate-util'
import $appCfg from '@/$appCfg'

const validations = {
  core: {
    required
  }
}

export default {
  components: {
    ValidationMessages,
    ValidationDebug,
    DelayedUpdateInput
  },
  data() {
    return {
      showValidationData: false,
      text1: null,
      text2: null,
      text3: null,
      number1: null,
      email: null,
      foo: {
        bar: null,
        asd: null
      },
      dirtyCheckVal: null,
      delayedUpdateVal: null,
      delayedUpdateVal2: null
    }
  },
  validations: {
    text1: {
      required,
      minLength: minLength(4)
    },
    text2: {
      required,
      minLength: minLength(4)
    },
    text3: {
      sameAsText2: sameAs('text2')
    },
    dirtyCheckVal: {
      required,
      minLength: minLength(4)
    },
    number1: {
      between: between(20, 30)
    },
    email: {
      email
    },
    foo: {
      bar: validations.core,
      asd: Object.assign({}, validations.core, { minLength: minLength(2) })
    },
    delayedUpdateVal: {
      required,
      minLength: minLength(3)
    },
    delayedUpdateVal2: {
      required,
      delayed(value) {
        return new Promise((resolve, reject) => {
          console.log('delayed validation start')
          setTimeout(() => {
            const val = minLength(3)(value)
            console.log('delayed validation resolve: ' + val)
            resolve(val)
          }, 2000)
        })
      }
    }
  },
  watch: {
    'delayedUpdateVal'() {
      console.log('$v.delayedUpdateVal', this.$v.delayedUpdateVal)
    },
    '$v.delayedUpdateVal2.$pending'() {
      console.log('v.delayedUpdateVal.$pending')
      validationUtil.invokeIfCompleteValid(this.$v.delayedUpdateVal2, this.validationComplete)
    }
  },
  methods: {
    validationComplete() {
      $appCfg.libs.toasted.show('validationComplete', { duration: 1000 })
    }
  }
}
</script>

<style scoped>
.test {
  width: 85%;
  margin: 0 auto;
}
.messages li {
  border: 1px solid black;
}
.error {
  border: 1px solid red;
  display: block;
}
.invalid {
  border-color: red;
}
.valid {
  border-color: green;
}
</style>
