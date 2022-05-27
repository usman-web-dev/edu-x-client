import { Component, Prop } from 'nuxt-property-decorator';
import BaseInput from '../input';

@Component
export default class BaseTimePicker extends BaseInput {
  $refs!: {
    dialog: any;
  };

  dialog = false;

  @Prop({
    type: String
  })
  private readonly date?: string;

  get formatedTime() {
    if (this.date && this.value) {
      return this.$helpers.formatTime(this.date, this.value);
    }

    return this.value;
  }
}
