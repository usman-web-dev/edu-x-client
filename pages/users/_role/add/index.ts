import { Component, Vue } from 'nuxt-property-decorator';
import { RoleModel, UserModel } from '~/api';
import { RoleType } from '~/utils';

@Component
export default class UsersAddView extends Vue {
  user = new UserModel({ role: new RoleModel({ id: this.userType }) });

  get userType(): RoleType {
    return +(this.$route.params.role as string);
  }

  get title() {
    return this.$helpers.titleize(this.$helpers.getUserTypeFromNumber(this.userType, true));
  }

  get subtitle() {
    return `Add a new ${this.title.toLocaleLowerCase()} here`;
  }
}
