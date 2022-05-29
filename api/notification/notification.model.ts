import { BaseModel } from '../base.model';
import { UserModel } from '../user';

export class NotificationModel extends BaseModel {
  id!: number;
  text = '';
  users: Array<UserModel> = [];
  createdAt!: Date;

  constructor(data?: Partial<NotificationModel>) {
    super();
    Object.assign(this, data);
  }
}
