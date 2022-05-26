import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, BatchModel, ClassModel } from '~/api';

@Component
export default class ClassAddView extends Vue {
  classData = new ClassModel({ batch: new BatchModel(), courses: [] });
  editApiParams = new ApiParamsModel({ populate: ['batch.department', 'courses'] });
  batchApiParams = new ApiParamsModel({ populate: ['department.grade'] });
  courseApiParams = new ApiParamsModel();

  get courseKey() {
    return this.courseApiParams.filters.department?.id?.$eq;
  }

  onEditData(classData: ClassModel) {
    this.classData = { ...this.classData, ...classData } as ClassModel;
    this.updateCourseParams(classData.batch.department.id);
  }

  onBatchChange({ department: { id } }: BatchModel) {
    this.classData.courses = [];
    this.updateCourseParams(id);
  }

  updateCourseParams(id: number) {
    this.courseApiParams.filters = { department: { id: { $eq: id } } };
  }

  batchCustomFilter(
    {
      name,
      department: {
        name: departmentName,
        grade: { name: gradeName }
      }
    }: BatchModel,
    search: string
  ) {
    return (
      name.toLowerCase().includes(search.toLowerCase()) ||
      departmentName.toLowerCase().includes(search.toLowerCase()) ||
      gradeName.toLowerCase().includes(search.toLowerCase())
    );
  }
}
