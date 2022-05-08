import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, UserModel } from '~/api';
import { RoleType } from '~/utils';

@Component
export default class TeachersView extends Vue {
  apiParams = new ApiParamsModel<UserModel>({
    filters: {
      role: {
        id: {
          $eq: RoleType.TEACHER
        }
      }
    }
  });
}