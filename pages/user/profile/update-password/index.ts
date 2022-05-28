import { Component, Vue } from 'nuxt-property-decorator';
import { NewPasswordModel } from '~/api';

@Component
export default class UpdatePasswordView extends Vue {
  loading = false;
  password = new NewPasswordModel();
  confirmPassword = '';

  async updatePassword() {
    this.loading = true;

    try {
      await this.$api.auth.updatePassword(this.password);
      this.$alert.show('Password has been updated.');
      this.password = new NewPasswordModel();
      this.confirmPassword = '';
      (this.$refs.baseFormRef as any).$refs.baseFormRef.reset();
    } catch {
    } finally {
      this.loading = false;
    }
  }
}
