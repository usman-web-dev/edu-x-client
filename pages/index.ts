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
      const { email, password } = this.loginData;

      await this.$api.auth.login({ email, password });

      this.$router.push('/dashboard');
    } catch (e) {
      alert(e);
    } finally {
      this.$nuxt.$loading.finish();
    }
  }
}
