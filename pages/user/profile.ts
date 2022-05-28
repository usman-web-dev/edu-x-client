import { Component, Vue } from 'nuxt-property-decorator';
import { UserModel } from '~/api';

@Component
export default class ProfileView extends Vue {
  user = { ...this.$strapi.user } as UserModel;
}
