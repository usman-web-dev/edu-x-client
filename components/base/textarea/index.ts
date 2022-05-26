import { Component } from 'nuxt-property-decorator';
import { ValidationProvider } from 'vee-validate';
import BaseInput from '../input';

@Component({
  components: {
    ValidationProvider
  }
})
export default class BaseTextarea extends BaseInput {}
