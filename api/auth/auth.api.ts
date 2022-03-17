import { BaseApi } from '../base.api';
import { LoginModel } from './login.model';

class AuthApi extends BaseApi {
  login({ email, password }: LoginModel) {
    return this.$strapi.login({ identifier: email, password });
  }
}

export const auth = new AuthApi();
