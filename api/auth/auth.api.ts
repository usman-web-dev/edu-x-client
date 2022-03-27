import { BaseApi } from '../base.api';
import { LoginModel } from './login.model';
import { ForgotPasswordModel, ResetPasswordModel } from './password.model';

class AuthApi extends BaseApi {
  login({ email, password }: LoginModel) {
    return this.$strapi.login({ identifier: email, password });
  }
  forgotPassword(data: ForgotPasswordModel) {
    return this.$strapi.forgotPassword({ ...data });
  }
  resetPassword(data: ResetPasswordModel) {
    return this.$strapi.resetPassword({ ...data });
  }
  async logout() {
    if (await this.$context.$confirm.confirm('Are you sure you want to logout?')) {
      await this.$strapi.logout();

      this.$context.app.router?.push('/auth/login');
    }
  }
}

export const auth = new AuthApi();
