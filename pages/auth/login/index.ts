import { Component, Vue } from 'nuxt-property-decorator';
import { LoginModel } from '~/api/auth';

@Component({
  layout: 'auth'
})
export default class LoginView extends Vue {
  loginData = new LoginModel();

  async login() {
    this.$nuxt.$loading.start();

    try {
      await this.$api.auth.login(this.loginData);

      this.$router.push('/dashboard');
    } catch {
    } finally {
      this.$nuxt.$loading.finish();
    }
  }
}
