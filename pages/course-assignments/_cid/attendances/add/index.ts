import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, AttendanceModel, AttendanceStudentModel, CourseAssignmentModel } from '~/api';

@Component
export default class AttendancesAddView extends Vue {
  attendance = new AttendanceModel();
  courseAssignmentApiParams = new ApiParamsModel({ populate: ['course', 'section.class', 'students'] });

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
  get IsSome() {
    return this.presents > 0 && !this.isAll;
  }

  handleAttendanceStudents(present = false) {
    this.attendance.attendanceStudents =
      this.attendance.courseAssignment?.students.map(
        student =>
          new AttendanceStudentModel({
            student,
            present
          })
      ) ?? [];
  }

  toggle() {
    this.handleAttendanceStudents(!this.isAll);
  }
}
