import { Component } from 'nuxt-property-decorator';
import BaseInput from '../input';

@Component
export default class BaseDateTimePicker extends BaseInput {
  $refs!: {
    dialog: any;
  };

  dialog = false;

  get date() {
    return this.dateValue.date;
  }
  set date(value: string | null) {
    this.emitValue(value ? new Date(`${value}${this.time ? `T${this.time}` : ''}`) : null);
  }

  get time() {
    return this.dateValue.time;
  }
  set time(value: string | null) {
    this.emitValue(value ? new Date(`${this.date ?? this.$helpers.getDate(new Date())}T${value}`) : null);
  }

  get dateValue() {
    const value = this.value as unknown as Date | null;

    return {
      date: this.$helpers.getDate(value),
      time: this.$helpers.getDate(value, true)
    };
  }

  emitValue(value: Date | null) {
    this.$emit('input', value);
  }
}
