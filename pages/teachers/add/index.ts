import { Component, Vue } from 'nuxt-property-decorator';
import { RoleModel, UserModel } from '~/api';
import { RoleType } from '~/utils';

@Component
export default class TeacherAddView extends Vue {
  teacher = new UserModel({ role: new RoleModel({ id: RoleType.TEACHER }) });
}
