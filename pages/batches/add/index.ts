import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, BatchModel, DepartmentModel } from '~/api';

@Component
export default class BatchAddView extends Vue {
  batch = new BatchModel({ department: new DepartmentModel() });
  editApiParams = new ApiParamsModel({ populate: ['department'] });
  departmentApiParams = new ApiParamsModel({ populate: ['grade'] });

  departmentCustomFilter({ name, grade: { name: gradeName } }: DepartmentModel, search: string) {
    return name.toLowerCase().includes(search.toLowerCase()) || gradeName.toLowerCase().includes(search.toLowerCase());
  }
}
