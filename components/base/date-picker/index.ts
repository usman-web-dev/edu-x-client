import { Component } from 'nuxt-property-decorator';
import BaseInput from '../input';

@Component
export default class BaseDatePicker extends BaseInput {
  $refs!: {
    dialog: any;
  };

  dialog = false;
}
