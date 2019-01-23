<template>
  <div class="test">
    <ul class="list-group">
      <li class="list-group-item">
        <form>
          <div class="row">
            <div class="col form-group">
              <label>text1</label>
              <input v-model="text1" type="text" class="form-control">
              <validation-messages :validation="$v.text1" />
            </div>
            <div class="col form-group">
              <label>text2</label>
              <input v-model="text2" type="text" class="form-control">
              <validation-messages :validation="$v.text2" />
            </div>
            <div class="col form-group">
              <label>number1</label>
              <input v-model.number="number1" type="text" class="form-control">
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
            </div>
            <div class="col form-group">
              <label>foo.asd</label>
              <input v-model="foo.asd" type="text" class="form-control">
              <validation-messages :validation="$v.foo.asd" />
            </div>
            <div class="form-group col">
              $v.foo:
              <validation-messages :validation="$v.foo.asd" />
            </div>
          </div>
        </form>
      </li>
      <li class="list-group-item">
        <validation-messages :validation="$v" :global="true" />
      </li>
      <li class="list-group-item">
        $v: <code v-html="$v" />
      </li>
    </ul>
  </div>
</template>

<script>
import { required, minLength, between, sameAs, email } from 'vuelidate/lib/validators'
import ValidationMessages from './ValidationMessages.vue'

const validations = {
  core: {
    required,
    minLength: minLength(4)
  }
}

export default {
  components: {
    ValidationMessages
  },
  data() {
    return {
      text1: null,
      text2: null,
      text3: null,
      number1: null,
      email: null,
      foo: {
        bar: null,
        asd: null
      }
    }
  },
  validations: {
    text1: {
      required,
      minLength: minLength(4)
    },
    text2: {
      sameAsText1: sameAs('text1')
    },
    number1: {
      between: between(20, 30)
    },
    email: {
      email
    },
    foo: {
      bar: {
        core: validations.core
      },
      asd: {
        core: validations.core
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
