import { AssessmentModel } from '../assessment';
import { AttendanceModel } from '../attendance';
import { BaseModel } from '../base.model';
import { CourseModel } from '../course';
import { SectionModel } from '../section';
import { UserModel } from '../user';

export class CourseAssignmentModel extends BaseModel {
  id!: number;
  section: SectionModel | null = null;
  course: CourseModel | null = null;
  teacher: UserModel | null = null;
  students: Array<UserModel> = [];
  assessments!: Array<AssessmentModel>;
  attendances!: Array<AttendanceModel>;

  constructor(data?: Partial<CourseAssignmentModel>) {
    super();
    Object.assign(this, data);
  }
}
