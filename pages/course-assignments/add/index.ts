import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, CourseAssignmentModel } from '~/api';
import { RoleType } from '~/utils';

@Component
export default class ClassAddView extends Vue {
  courseAssignment = new CourseAssignmentModel();
  editApiParams = new ApiParamsModel({ populate: ['course', 'section.class.courses', 'teacher', 'students'] });
  sectionApiParams = new ApiParamsModel({ populate: ['class.courses'] });
  studentsApiParams = new ApiParamsModel({ filters: { role: { id: { $eq: RoleType.STUDENT } } } });
  teacherApiParams = new ApiParamsModel({ filters: { role: { id: { $eq: RoleType.TEACHER } } } });

  get courses() {
    return this.courseAssignment.section?.class.courses ?? [];
  }
}
