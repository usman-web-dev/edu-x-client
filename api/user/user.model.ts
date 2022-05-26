import { BaseModel } from '../base.model';
import { DepartmentModel } from '../department';
import { RoleModel } from './role.model';

export class UserModel extends BaseModel {
  username = '';
  email = '';
  createdAt!: Date;
  updateAt!: Date;
  role!: RoleModel;
  blocked = false;
  confirmed = false;
  private provider = 'local';
  department!: DepartmentModel;

  constructor(data?: Partial<UserModel>) {
    super();
    Object.assign(this, data);
  }
}
