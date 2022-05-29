import { extend } from 'vee-validate';
import { between, confirmed, email, max, min, required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required.'
});

extend('required-array', {
  validate: (value: Array<unknown>) => {
    console.log('sadsadam', value, value.length, typeof value);
    return !!value.length;
  },
  message: 'This field is required.'
});

extend('email', {
  ...email,
  message: 'Email must be valid.'
});

extend('true', {
  validate: value => value === true,
  message: 'This is required.'
});

extend('between', {
  ...between,
  message: 'This field must be bewteen {min} and {max}.'
});

extend('max', {
  ...max,
  message: 'This field must not be greater than {length} characters!'
});

extend('min', {
  ...min,
  message: 'This field must be at least {length} characters!'
});

extend('confirmed', {
  ...confirmed,
  message: "{target} confirmation doesn't match!"
});

extend('number', {
  validate: (value: string) => +value > 0,
  message: 'This field must be a number!'
});
