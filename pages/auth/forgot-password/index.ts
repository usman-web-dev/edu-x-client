import { Component, Vue } from 'nuxt-property-decorator';
import { ForgotPasswordModel } from '~/api/auth';

@Component({
  layout: 'auth'
})
export default class ForgotPasswordView extends Vue {
  forgotPasswordData = new ForgotPasswordModel();
  loading = false;

  async forgotPassword() {
    this.loading = true;

    try {
      await this.$api.auth.forgotPassword(this.forgotPasswordData);

      this.$router.push('/auth/login');
      this.$alert.show('Reset password link sent to your email');
    } catch {
    } finally {
      this.loading = false;
    }
  }
}
