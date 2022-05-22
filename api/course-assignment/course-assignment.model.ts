import { BaseModel } from '../base.model';
import { CourseModel } from '../course';
import { SectionModel } from '../section';
import { UserModel } from '../user';

export class CourseAssignmentModel extends BaseModel {
  section: SectionModel | null = null;
  course: CourseModel | null = null;
  teacher: UserModel | null = null;
  students: Array<UserModel> = [];

  constructor(data?: Partial<CourseAssignmentModel>) {
    super();
    Object.assign(this, data);
  }
}
