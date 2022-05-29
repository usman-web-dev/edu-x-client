import { BaseModel } from '../base.model';
import { UserModel } from '../user';
import { AttendanceModel } from './attendance.model';

export class AttendanceStudentModel extends BaseModel {
  id!: number;
  attendance!: AttendanceModel;
  student: UserModel | null = null;
  present = false;

  constructor(data?: Partial<AttendanceStudentModel>) {
    super();
    Object.assign(this, data);
  }
}
