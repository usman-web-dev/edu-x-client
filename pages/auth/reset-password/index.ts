import { Component, Vue } from 'nuxt-property-decorator';
import { ResetPasswordModel } from '~/api/auth';

@Component({
  layout: 'auth',
  middleware: ({
    redirect,
    route: {
      query: { code }
    },
    $alert
  }) => {
    if (!code) {
      $alert.show(`Please use the link from your email to reset the password.`, 'error');
      redirect('/auth/login');
    }
  }
})
export default class ResetPasswordView extends Vue {
  resetPasswordData = new ResetPasswordModel();
  loading = false;

  async resetPassword() {
    this.loading = true;

    try {
      await this.$api.auth.resetPassword({ ...this.resetPasswordData, code: this.$route.query.code as string });

      this.$router.push('/auth/login');
      this.$alert.show('Your password has been reset, you can continue');
    } catch {
    } finally {
      this.loading = false;
    }
  }
}
