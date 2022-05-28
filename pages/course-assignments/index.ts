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
      icon: 'mdi-calendar-cursor',
      text: 'Add Attendance',
      roles: [RoleType.STUDENT, RoleType.TEACHER]
    },
    {
      name: 'view-attendances',
      color: 'primary',
      icon: 'mdi-calendar-check-outline',
      text: 'View Attendances',
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
}
