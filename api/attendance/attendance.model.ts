import { BaseModel } from '../base.model';
import { CourseAssignmentModel } from '../course-assignment';
import { AttendanceStudentModel } from './attendance-student.model';

export class AttendanceModel extends BaseModel {
  id!: number;
  date = '';
  fromTime = '';
  toTime = '';
  description = '';
  courseAssignment: CourseAssignmentModel | null = null;
  attendanceStudents: Array<AttendanceStudentModel> = [];

  constructor(data?: Partial<AttendanceModel>) {
    super();
    Object.assign(this, data);
  }
}
