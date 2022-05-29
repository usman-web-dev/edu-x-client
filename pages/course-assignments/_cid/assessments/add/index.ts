import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, AssessmentModel, CourseAssignmentModel } from '~/api';

@Component
export default class AssessmentAddView extends Vue {
  assessment = new AssessmentModel();
  courseAssignmentApiParams = new ApiParamsModel({ populate: ['course', 'section.class'] });

  get subtitle() {
    const { course, section } = this.assessment.course ?? new CourseAssignmentModel();
    return `Add a new assessment for ${course?.name ?? ''} (${section?.class?.name ?? ''}/${section?.name ?? ''})`;
  }

  async fetch() {
    this.assessment.course = await this.$api.courseAssignment.findOne(
      +this.$route.params.cid,
      this.courseAssignmentApiParams
    );
  }
}
