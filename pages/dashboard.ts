import { Component, Vue } from 'nuxt-property-decorator';
// @ts-ignore
import { GridItem, GridLayout } from 'vue-grid-layout';
import { ApiParamsModel, AssessmentModel, AttendanceModel, CourseAssignmentModel } from '~/api';
import { AnyObject, RoleType } from '~/utils';

type Layout = { x: number; y: number; w: number; h: number; i: string };

@Component({
  components: {
    GridLayout,
    GridItem
  }
})
export default class DashboardView extends Vue {
  layout: Array<Layout> = (() => {
    const layout = localStorage.getItem(`${this.$strapi.user.id}:layout`);
    if (layout) {
      return JSON.parse(layout);
    }

    const tempLayout: Array<Layout> = [];

    if (this.$helpers.isAdmin) {
      tempLayout.push(
        ...[
          { x: 0, y: 0, w: 3, h: 3, i: 'departments' },
          { x: 3, y: 0, w: 6, h: 6, i: 'users' },
          { x: 0, y: 0, w: 3, h: 3, i: 'batches' },
          { x: 9, y: 0, w: 3, h: 3, i: 'classes' },
          { x: 9, y: 0, w: 3, h: 3, i: 'courses' }
        ]
      );
    } else if (this.$helpers.isTeacher) {
      tempLayout.push(...[]);
    } else if (this.$helpers.isStudent) {
      tempLayout.push(
        ...[
          { x: 3, y: 0, w: 9, h: 6, i: 'assessments' },
          { x: 0, y: 6, w: 12, h: 15, i: 'coursesAssignment' }
        ]
      );
    }

    if (this.$helpers.isTeacher || this.$helpers.isStudent) {
      tempLayout.push(...[{ x: 0, y: 0, w: 3, h: 6, i: 'courseAssignments' }]);
    }

    return tempLayout;
  })();

  departments = 0;
  batches = 0;
  classes = 0;
  courses = 0;
  admins = 0;
  teachers = 0;
  students = 0;
  courseAssignments = 0;
  assessments: Array<AssessmentModel> = [];
  coursesAssignment: Array<CourseAssignmentModel> = [];

  async fetch() {
    const pagination = { page: 1, total: 0, pageCount: 0, pageSize: 1 };
    const params = new ApiParamsModel({ pagination });
    const { user } = this.$strapi;

    if (this.$helpers.isAdmin) {
      const [
        {
          pagination: { total: departments }
        },
        {
          pagination: { total: batches }
        },
        {
          pagination: { total: classes }
        },
        {
          pagination: { total: courses }
        },
        {
          pagination: { total: admins }
        },
        {
          pagination: { total: teachers }
        },
        {
          pagination: { total: students }
        }
      ] = await Promise.all([
        this.$api.department.find(params),
        this.$api.batch.find(params),
        this.$api.class.find(params),
        this.$api.course.find(params),
        this.$api.user.find(new ApiParamsModel({ ...params, filters: { role: { id: RoleType.ADMIN } } })),
        this.$api.user.find(new ApiParamsModel({ ...params, filters: { role: { id: RoleType.TEACHER } } })),
        this.$api.user.find(new ApiParamsModel({ ...params, filters: { role: { id: RoleType.STUDENT } } }))
      ]);

      this.departments = departments;
      this.batches = batches;
      this.classes = classes;
      this.courses = courses;
      this.admins = admins;
      this.teachers = teachers;
      this.students = students;
    } else if (this.$helpers.isTeacher) {
      const [
        {
          pagination: { total: courseAssignments }
        }
      ] = await Promise.all([this.$api.courseAssignment.find(params)]);

      this.courseAssignments = courseAssignments;
    } else if (this.$helpers.isStudent) {
      const [
        {
          data: coursesAssignments,
          pagination: { total: courseAssignments }
        }
      ] = await Promise.all([
        this.$api.courseAssignment.find(
          new ApiParamsModel({
            filters: {
              students: {
                id: user.id
              }
            },
            pagination: { ...pagination, pageSize: 10 },
            populate: [
              'course',
              'teacher',
              'section.class.batch.department',
              'assessments.submissions.student',
              'attendances.attendanceStudents.student'
            ]
          })
        )
      ]);

      this.assessments = coursesAssignments
        .map(({ assessments, attendances, ...rest }) => {
          assessments.forEach(assessment => {
            assessment.course = rest as CourseAssignmentModel;
          });
          return assessments;
        })
        .flat()
        .filter(({ submissions }) => !submissions.find(({ student: { id } }) => id === user.id));
      this.courseAssignments = courseAssignments;
      this.coursesAssignment = coursesAssignments;
    }
  }

  saveLayout(layout: Array<AnyObject>) {
    localStorage.setItem(`${this.$strapi.user.id}:layout`, JSON.stringify(layout));
  }

  getAttendance(attendances: Array<AttendanceModel>) {
    const all = attendances
      .map(({ attendanceStudents }) => attendanceStudents)
      .flat()
      .filter(({ student }) => student?.id === this.$strapi.user.id);

    if (!all.length) {
      return -1;
    }

    const present = all.reduce((total, { present }) => (total += present ? 1 : 0), 0);

    return (present * 100) / all.length;
  }
}
