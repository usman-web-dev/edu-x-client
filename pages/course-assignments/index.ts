import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel } from '~/api';
import { ListingAction, OverrideListingAction, RoleType } from '~/utils';

@Component
export default class CourseAssignmentsView extends Vue {
  get filters() {
    const userId = this.$strapi.user?.id;

    if (this.$helpers.hasRole(RoleType.TEACHER)) {
      return {
        teacher: {
          id: {
            $eq: userId
          }
        }
      };
    } else if (this.$helpers.hasRole(RoleType.STUDENT)) {
      return {
        students: {
          id: {
            $eq: userId
          }
        }
      };
    }

    return {};
  }

  apiParams = new ApiParamsModel({
    populate: ['course', 'section.class.batch.department.grade', 'teacher', 'students'],
    filters: this.filters
  });

  actions: Array<ListingAction> = [
    {
      name: 'add-attendance',
      color: 'secondary',
      icon: 'mdi-calendar-plus',
      text: 'Add Attendance',
      roles: [RoleType.TEACHER]
    },
    {
      name: 'view-attendances',
      color: 'primary',
      icon: 'mdi-calendar-check-outline',
      text: 'View Attendances',
      roles: [RoleType.STUDENT, RoleType.TEACHER]
    },
    {
      name: 'add-assessment',
      color: 'accent',
      icon: 'mdi-text-box-plus-outline',
      text: 'Add Assessment',
      roles: [RoleType.TEACHER]
    },
    {
      name: 'view-assessments',
      color: 'primary',
      icon: 'mdi-text-box-outline',
      text: 'View Assessments',
      roles: [RoleType.STUDENT, RoleType.TEACHER]
    },
    {
      name: 'add-meeting',
      color: 'success',
      icon: 'mdi-laptop-account',
      text: 'Schedule Meeting',
      roles: [RoleType.STUDENT, RoleType.TEACHER]
    }
  ];

  overrideActions(): Array<OverrideListingAction> {
    return [
      {
        name: 'edit',
        roles: [RoleType.ADMIN]
      },
      {
        name: 'delete',
        roles: [RoleType.ADMIN]
      },
      ...this.actions
    ];
  }

  handleAction(type: 'attendances' | 'assessments' | 'meetings', subType: 'view' | 'add', cid: number) {
    this.$router.push({
      name: `course-assignments-cid-${type}${subType === 'add' ? '-add' : ''}`,
      params: { cid: `${cid}` }
    });
  }
}
