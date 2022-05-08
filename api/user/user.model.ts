import { BaseModel } from '../base.model';
import { RoleModel } from './role.model';

export class UserModel extends BaseModel {
  username = '';
  email = '';
  createdAt!: Date;
  updateAt!: Date;
  role!: RoleModel;
  blocked = false;
  private provider = 'local';

  constructor(data?: Partial<UserModel>) {
    super();
    Object.assign(this, data);
  }
}
