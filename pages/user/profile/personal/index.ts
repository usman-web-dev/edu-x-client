import { Component, Vue } from 'nuxt-property-decorator';
import { UserModel } from '~/api';

@Component
export default class ProfilePersonalView extends Vue {
  user = { ...this.$strapi.user } as UserModel;
  loading = false;

  async updateProfile() {
    this.loading = true;
    await this.$api.user.update(this.user.id, this.user);
    this.$strapi.setUser({ ...this.user });
    this.loading = false;

    this.$alert.show('Profile has been updated.');
  }
}
