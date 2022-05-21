import { BaseModel } from '../base.model';

export class InstituteModel extends BaseModel {
  id!: number;
  name = '';

  constructor(data?: Partial<InstituteModel>) {
    super();
    Object.assign(this, data);
  }
}
