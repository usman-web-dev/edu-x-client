import { Component } from 'nuxt-property-decorator';
import { ValidationProvider } from 'vee-validate';
import BaseInput from '../input';

@Component({
  components: {
    ValidationProvider
  }
})
export default class BaseTextField extends BaseInput {
  $refs!: {
    vTextFieldRef: HTMLInputElement;
  };

  ViewPassword = false;

  get Type() {
    const { type } = this.$attrs;

    return type === 'password' ? (!this.ViewPassword ? 'password' : 'text') : type;
  }
}
