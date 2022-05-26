import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, ClassModel, CourseAssignmentModel } from '~/api';
import { RoleType } from '~/utils';

@Component
export default class ClassAddView extends Vue {
  courseAssignment = new CourseAssignmentModel();
  classData: ClassModel | null = null;
  editApiParams = new ApiParamsModel({ populate: ['course', 'section.class.courses', 'teacher', 'students'] });
  classApiParams = new ApiParamsModel({ populate: ['courses', 'batch.department.grade'] });
  sectionApiParams = new ApiParamsModel({
    filters: {
      class: {
        id: {
          $eq: this.classData?.id
        }
      }
    }
  });
  studentsApiParams = new ApiParamsModel({ filters: { role: { id: { $eq: RoleType.STUDENT } } } });
  teacherApiParams = new ApiParamsModel({ filters: { role: { id: { $eq: RoleType.TEACHER } } } });

  get courses() {
    return this.classData?.courses ?? [];
  }

  get sectionKey() {
    return this.classData?.id;
  }

  onEditData(courseAssignment: CourseAssignmentModel) {
    this.courseAssignment = { ...this.courseAssignment, ...courseAssignment } as CourseAssignmentModel;
    this.updateSectionParams(courseAssignment.section?.class.id!);
    this.classData = new ClassModel(courseAssignment.section?.class);
  }

  onClassChange(classData: ClassModel | null) {
    this.courseAssignment.section = this.courseAssignment.course = null;
    classData?.id && this.updateSectionParams(classData.id);
  }

  updateSectionParams(id: number) {
    this.sectionApiParams.filters = { class: { id: { $eq: id } } };
  }

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
