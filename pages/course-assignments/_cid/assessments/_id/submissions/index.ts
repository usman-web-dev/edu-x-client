import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, AssessmentModel } from '~/api';
import { ListingAction, OverrideListingAction } from '~/utils';

@Component({
  middleware: ['isTeacher']
})
export default class AssessmentSubmissionsView extends Vue {
  assessment = new AssessmentModel();
  assessmentApiParams = new ApiParamsModel({ populate: ['course.course'] });

  get title() {
    const { type, subType } = this.assessment;
    return `Submissions for ${this.$helpers.titleize(type ?? '')} (${subType})`;
  }

  get subtitle() {
    return `Course Name: ${this.assessment.course?.course?.name ?? ''}`;
  }

  apiParams = new ApiParamsModel({
    populate: ['answers', 'student'],
    filters: { assessment: { id: { $eq: +this.$route.params.id } } }
  });

  actions: Array<ListingAction> = [
    {
      name: 'view-details',
      color: 'primary',
      text: 'View Details',
      icon: 'mdi-text-box-search-outline'
    }
  ];

  overrideActions(): Array<OverrideListingAction> {
    return [
      {
        name: 'edit',
        hide: true
      },
      {
        name: 'delete',
        hide: true
      },
      ...this.actions
    ];
  }

  async fetch() {
    this.assessment = await this.$api.assessment.findOne(+this.$route.params.id, this.assessmentApiParams);
  }
}
