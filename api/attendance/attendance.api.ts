import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { AttendanceModel } from './attendance.model';

class AttendanceApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find('attendances', params);
  }

  findOne(id: number, params?: ApiParamsModel) {
    return this._findOne('attendances', id, params);
  }

  async create({ attendanceStudents, ...attendanceData }: AttendanceModel) {
    const attendance: AttendanceModel = await this._create('attendances', attendanceData);

    attendanceStudents.forEach(attendanceStudent => {
      attendanceStudent.attendance = attendance;
    });

    return Promise.all(
      attendanceStudents.map(attendanceStudent => this._create('attendance-students', attendanceStudent))
    );
  }

  update(id: number, attendance: AttendanceModel) {
    return this._update<AttendanceModel>('attendances', id, attendance);
  }

  delete(id: number) {
    return this._delete('attendances', id);
  }
}

export const attendance = new AttendanceApi();
