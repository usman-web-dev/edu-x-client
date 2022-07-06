import { AnyObject } from '~/utils';
import { BaseModel } from '../base.model';
import { UserModel } from '../user';

export class NotificationModel extends BaseModel {
  id!: number;
  text!: string;
  user!: UserModel;
  createdAt!: Date;
  read!: boolean | null;
  type!: 'assessment' | 'marks' | 'meeting';
  extra!: AnyObject;

  constructor(data?: Partial<NotificationModel>) {
    super();
    Object.assign(this, data);
  }
}
