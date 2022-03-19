import { extend } from 'vee-validate';
import { confirmed, email, max, min, required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
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
