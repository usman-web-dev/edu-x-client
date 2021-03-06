import { BaseApi } from '../base.api';
import { LoginModel } from './login.model';
import { ForgotPasswordModel, NewPasswordModel, ResetPasswordModel } from './password.model';

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
    if (await this.$context.$confirm.confirm('Logout', 'Are you sure you want to logout?')) {
      await this.$strapi.logout();

      this.$context.app.router?.push('/auth/login');
    }
  }
  updatePassword(data: NewPasswordModel) {
    return this.$strapi.$http.patch('/auth/update-password', (data as any).toJSON());
  }
}

export const auth = new AuthApi();
