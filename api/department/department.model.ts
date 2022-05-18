import { BaseModel } from '../base.model';

export class DepartmentModel extends BaseModel {
  name = '';
  createdAt!: Date;
  updateAt!: Date;

  constructor(data?: Partial<DepartmentModel>) {
    super();
    Object.assign(this, data);
  }
}
