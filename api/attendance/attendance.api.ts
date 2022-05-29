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

  async update(id: number, { attendanceStudents, ...attendanceData }: AttendanceModel) {
    await this._update('attendances', id, attendanceData);

    const attendanceStudentsToCreate = attendanceStudents.filter(({ id }) => !id);
    const attendanceStudentsToUpdate = attendanceStudents.filter(({ id }) => !!id);

    attendanceStudentsToCreate.forEach(attendanceStudent => {
      attendanceStudent.attendance = attendanceData as AttendanceModel;
    });

    return Promise.all([
      ...attendanceStudentsToCreate.map(attendanceStudent => this._create('attendance-students', attendanceStudent)),
      ...attendanceStudentsToUpdate.map(attendanceStudent =>
        this._update('attendance-students', attendanceStudent.id, attendanceStudent)
      )
    ]);
  }

  delete(id: number) {
    return this._delete('attendances', id);
  }
}

export const attendance = new AttendanceApi();
