import { BaseModel } from '../base.model';
import { CourseModel } from '../course';
import { GradeModel } from '../grade';
import { UserModel } from '../user';

export class DepartmentModel extends BaseModel {
  id!: number;
  name = '';
  grade!: GradeModel;
  courses!: Array<CourseModel>;
  users!: Array<UserModel>;

  constructor(data?: Partial<DepartmentModel>) {
    super();
    Object.assign(this, data);
  }
}
