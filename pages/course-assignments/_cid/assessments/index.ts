import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, CourseAssignmentModel } from '~/api';
import { ListingAction, OverrideListingAction, RoleType } from '~/utils';

@Component
export default class AssessmentsView extends Vue {
  courseAssignment = new CourseAssignmentModel();
  apiParams = new ApiParamsModel({ filters: { course: { id: { $eq: +this.$route.params.cid } } } });
  courseAssignmentApiParams = new ApiParamsModel({ populate: ['course', 'section.class', 'students'] });

  get subtitle() {
    const { course, section } = this.courseAssignment;
    return `All assessments for ${course?.name ?? ''} (${section?.class?.name ?? ''}/${section?.name ?? ''})`;
  }

  actions: Array<ListingAction> = [
    {
      name: 'view-details',
      color: 'primary',
      icon: 'mdi-text-box-search-outline',
      text: 'View Details',
      roles: [RoleType.STUDENT]
    },
    {
      name: 'view-submissions',
      color: 'primary',
      icon: 'mdi-text-box-multiple-outline',
      text: 'View Submissions',
      roles: [RoleType.TEACHER]
    }
  ];

  overrideActions(): Array<OverrideListingAction> {
    return [
      {
        name: 'edit',
        roles: [RoleType.TEACHER]
      },
      {
        name: 'delete',
        roles: [RoleType.TEACHER]
      },
      ...this.actions
    ];
  }

  async fetch() {
    this.courseAssignment = await this.$api.courseAssignment.findOne(
      +this.$route.params.cid,
      this.courseAssignmentApiParams
    );
  }

  handleAction(type: 'details' | 'submissions', id: number) {
    this.$router.push({
      name: `course-assignments-cid-assessments-id-${type}`,
      params: { ...this.$route.params, id: `${id}` }
    });
  }
}
