import { BaseModel } from '../base.model';
import { DepartmentModel } from '../department';

export class CourseModel extends BaseModel {
  name = '';
  code = '';
  creditHours: number | null = null;
  department!: DepartmentModel;

  constructor(data?: Partial<CourseModel>) {
    super();
    Object.assign(this, data);
  }
}
