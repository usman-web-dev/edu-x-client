import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel } from '~/api';
import { OverrideListingAction, RoleType } from '~/utils';

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
    populate: ['course', 'section.class.batch', 'teacher', 'students'],
    filters: this.filters
  });

  overrideActions(): Array<OverrideListingAction> {
    return [
      {
        name: 'edit',
        roles: [RoleType.ADMIN]
      },
      {
        name: 'delete',
        roles: [RoleType.ADMIN]
      }
    ];
  }
}
