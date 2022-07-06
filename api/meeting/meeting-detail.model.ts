import { BaseModel } from '../base.model';
import { UserModel } from '../user';
import { MeetingModel } from './meeting.model';

export class MeetingDetailModel extends BaseModel {
  id!: number;
  meeting: MeetingModel | null = null;
  accepted!: boolean | null;
  attendee!: UserModel;

  constructor(data?: Partial<MeetingDetailModel>) {
    super();
    Object.assign(this, data);
  }
}
