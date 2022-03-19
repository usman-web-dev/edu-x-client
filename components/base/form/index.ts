import { Component, Vue } from 'nuxt-property-decorator';
import { ValidationObserver } from 'vee-validate';

@Component({
  components: {
    ValidationObserver
  }
})
export default class BaseForm extends Vue {}
