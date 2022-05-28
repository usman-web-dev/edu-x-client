import { InstituteType } from '~/utils';
import { BaseModel } from '../base.model';

export class InstituteModel extends BaseModel {
  id!: number;
  name = '';
  type!: InstituteType;

  constructor(data?: Partial<InstituteModel>) {
    super();
    Object.assign(this, data);
  }
}
