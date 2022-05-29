import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, AttendanceModel, AttendanceStudentModel, CourseAssignmentModel } from '~/api';

@Component
export default class AttendancesAddView extends Vue {
  attendance = new AttendanceModel();
  editApiParams = new ApiParamsModel({ populate: ['attendanceStudents.student'] });
  courseAssignmentApiParams = new ApiParamsModel({ populate: ['course', 'section.class', 'students'] });
  tempAttendanceStudents: Array<AttendanceStudentModel> = [];

  get subtitle() {
    const { course, section } = this.attendance.courseAssignment ?? new CourseAssignmentModel();
    return `Add a new attendance for ${course?.name ?? ''} (${section?.class?.name ?? ''}/${section?.name ?? ''})`;
  }

  async fetch() {
    this.attendance.courseAssignment = await this.$api.courseAssignment.findOne(
      +this.$route.params.cid,
      this.courseAssignmentApiParams
    );
    this.handleAttendanceStudents();
  }

  get presents() {
    return this.attendance.attendanceStudents.filter(({ present }) => present).length;
  }
  get isAll() {
    return this.presents === this.attendance.courseAssignment?.students.length;
  }

  handleAttendanceStudents(present = false) {
    this.attendance.attendanceStudents =
      this.attendance.courseAssignment?.students.map(student => {
        const idx = this.tempAttendanceStudents.findIndex(({ student: s }) => s?.id === student.id);
        const p = idx > -1 ? this.tempAttendanceStudents[idx].present : present;
        const id =
          idx > -1
            ? this.tempAttendanceStudents[idx].id
            : this.attendance.attendanceStudents.find(({ student: s }) => s?.id === student.id)?.id;
        idx > -1 && this.tempAttendanceStudents.splice(idx, 1);
        return new AttendanceStudentModel({
          id,
          student,
          present: p
        });
      }) ?? [];
  }

  toggle() {
    this.handleAttendanceStudents(!this.isAll);
  }
}
