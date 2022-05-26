import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, CourseModel } from '~/api';

@Component
export default class CourseAddView extends Vue {
  course = new CourseModel();
  editApiParams = new ApiParamsModel({ populate: ['department'] });
  departmentApiParams = new ApiParamsModel();
}
