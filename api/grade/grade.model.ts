import { BaseModel } from '../base.model';
import { DepartmentModel } from '../department';
import { InstituteModel } from '../institute';

export class GradeModel extends BaseModel {
  id!: number;
  name = '';
  institute!: InstituteModel;
  departments!: Array<DepartmentModel>;

  constructor(data?: Partial<GradeModel>) {
    super();
    Object.assign(this, data);
  }
}
