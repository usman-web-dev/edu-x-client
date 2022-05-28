import { BaseModel } from '../base.model';
import { DepartmentModel } from '../department';
import { InstituteModel } from '../institute';
import { RoleModel } from './role.model';

export class UserModel extends BaseModel {
  id!: number;
  username = '';
  email = '';
  createdAt!: Date;
  updateAt!: Date;
  role!: RoleModel;
  blocked = false;
  confirmed = false;
  private provider = 'local';
  institute!: InstituteModel;
  department!: DepartmentModel;

  constructor(data?: Partial<UserModel>) {
    super();
    Object.assign(this, data);
  }
}
