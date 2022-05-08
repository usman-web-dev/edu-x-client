import { Component, Vue } from 'nuxt-property-decorator';
import { RoleModel, UserModel } from '~/api';
import { RoleType } from '~/utils';

@Component
export default class StudentAddView extends Vue {
  student = new UserModel({ role: new RoleModel({ id: RoleType.STUDENT }) });
}
