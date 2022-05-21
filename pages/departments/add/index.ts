import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, DepartmentModel, GradeModel } from '~/api';

@Component
export default class DepartmentAddView extends Vue {
  department = new DepartmentModel({ grade: new GradeModel() });
  editApiParams = new ApiParamsModel({ populate: ['grade'] });
  gradeApiParams = new ApiParamsModel();
}
