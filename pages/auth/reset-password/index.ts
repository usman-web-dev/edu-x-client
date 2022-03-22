import { Component, Vue } from 'nuxt-property-decorator';
import { ResetPasswordModel } from '~/api/auth';

@Component({
  layout: 'auth'
})
export default class ResetPasswordView extends Vue {
  resetPasswordData = new ResetPasswordModel();

  async resetPassword() {
    this.$nuxt.$loading.start();

    try {
      await this.$api.auth.resetPassword({ ...this.resetPasswordData, code: this.$route.query.code as string });

      this.$router.push('/auth/login');
      this.$alert.show('Your password has been reset, you can continue');
    } catch {
    } finally {
      this.$nuxt.$loading.finish();
    }
  }
}
