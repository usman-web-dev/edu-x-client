import { BaseModel } from '../base.model';
import { CourseModel } from '../course';
import { SectionModel } from '../section';
import { UserModel } from '../user';

export class CourseAssignmentModel extends BaseModel {
  section = new SectionModel();
  course = new CourseModel();
  teacher = new UserModel();
  students: Array<UserModel> = [];

  constructor(data?: Partial<CourseAssignmentModel>) {
    super();
    Object.assign(this, data);
  }
}
