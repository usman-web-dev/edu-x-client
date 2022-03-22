import { Component, Vue } from 'nuxt-property-decorator';
import { ForgotPasswordModel } from '~/api/auth';

@Component({
  layout: 'auth'
})
export default class ForgotPasswordView extends Vue {
  forgotPasswordData = new ForgotPasswordModel();

  async forgotPassword() {
    this.$nuxt.$loading.start();

    try {
      await this.$api.auth.forgotPassword(this.forgotPasswordData);

      this.$router.push('/auth/login');
      this.$alert.show('Reset password link sent to your email');
    } catch {
    } finally {
      this.$nuxt.$loading.finish();
    }
  }
}
