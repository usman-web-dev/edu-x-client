import { BaseModel } from '../base.model';

export class ForgotPasswordModel {
  email = '';
}

export class NewPasswordModel extends BaseModel {
  password = '';
  oldPassword = '';
}

export class ResetPasswordModel {
  code = '';
  password = '';
  passwordConfirmation = '';
}
