import { BaseModel } from '../base.model';
import { ClassModel } from '../class';
import { DepartmentModel } from '../department';

export class BatchModel extends BaseModel {
  name = '';
  department!: DepartmentModel;
  classes!: Array<ClassModel>;

  constructor(data?: Partial<BatchModel>) {
    super();
    Object.assign(this, data);
  }
}
