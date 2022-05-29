import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, AttendanceModel, CourseAssignmentModel } from '~/api';
import { OverrideListingAction, RoleType } from '~/utils';

@Component
export default class AttendancesView extends Vue {
  courseAssignment = new CourseAssignmentModel();

  get subtitle() {
    const { course, section } = this.courseAssignment;
    return `All attendances for ${course?.name ?? ''} (${section?.class?.name ?? ''}/${section?.name ?? ''})`;
  }

  get filters() {
    const userId = this.$strapi.user?.id;

    if (this.$helpers.hasRole(RoleType.STUDENT)) {
      return {
        attendanceStudents: {
          student: {
            id: {
              $eq: userId
            }
          }
        }
      };
    }

    return {};
  }

  apiParams = new ApiParamsModel({
    populate: ['attendanceStudents'],
    filters: { ...this.filters, courseAssignment: { id: { $eq: +this.$route.params.cid } } }
  });
  courseAssignmentApiParams = new ApiParamsModel({ populate: ['course', 'section.class', 'students'] });

  overrideActions(): Array<OverrideListingAction> {
    return [
      {
        name: 'edit',
        roles: [RoleType.TEACHER]
      },
      {
        name: 'delete',
        roles: [RoleType.TEACHER]
      }
    ];
  }

  getPresentAbsentCount({ attendanceStudents }: AttendanceModel) {
    const { present, absent } = attendanceStudents.reduce(
      (count, { present }) => {
        count[present ? 'present' : 'absent']++;
        return count;
      },
      { present: 0, absent: 0 }
    );

    return `${present}/${absent}`;
  }

  async fetch() {
    this.courseAssignment = await this.$api.courseAssignment.findOne(
      +this.$route.params.cid,
      this.courseAssignmentApiParams
    );
  }
}
