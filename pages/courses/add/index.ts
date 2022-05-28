import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, CourseModel, DepartmentModel } from '~/api';

@Component
export default class CourseAddView extends Vue {
  course = new CourseModel();
  editApiParams = new ApiParamsModel({ populate: ['department'] });
  departmentApiParams = new ApiParamsModel({ populate: ['grade'] });

  departmentCustomFilter({ name, grade: { name: gradeName } }: DepartmentModel, search: string) {
    return name.toLowerCase().includes(search.toLowerCase()) || gradeName.toLowerCase().includes(search.toLowerCase());
  }
}
