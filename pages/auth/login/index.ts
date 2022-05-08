import { Component, Vue } from 'nuxt-property-decorator';
import { LoginModel } from '~/api/auth';

@Component({
  layout: 'auth'
})
export default class LoginView extends Vue {
  loginData = new LoginModel();
  loading = false;

  async login() {
    this.loading = true;

    try {
      await this.$api.auth.login(this.loginData);

      this.$router.push('/dashboard');
    } catch {
    } finally {
      this.loading = false;
    }
  }
}
