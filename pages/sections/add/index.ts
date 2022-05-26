import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, ClassModel, SectionModel } from '~/api';

@Component
export default class SectionAddView extends Vue {
  section = new SectionModel({ class: new ClassModel() });
  editApiParams = new ApiParamsModel({ populate: ['class'] });
  classApiParams = new ApiParamsModel({ populate: ['batch.department.grade'] });

  classCustomFilter(
    {
      name,
      batch: {
        name: batchName,
        department: {
          name: departmentName,
          grade: { name: gradeName }
        }
      }
    }: ClassModel,
    search: string
  ) {
    return (
      name.toLowerCase().includes(search.toLowerCase()) ||
      departmentName.toLowerCase().includes(search.toLowerCase()) ||
      batchName.toLowerCase().includes(search.toLowerCase()) ||
      gradeName.toLowerCase().includes(search.toLowerCase())
    );
  }
}
