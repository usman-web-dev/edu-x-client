import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, AssessmentModel, CourseAssignmentModel } from '~/api';

@Component
export default class AssessmentAddView extends Vue {
  assessment = new AssessmentModel();
  editApiParams = new ApiParamsModel({ populate: ['questionMedia'] });
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

  onEditData(assessment: AssessmentModel) {
    if (!assessment.questionMedia) {
      assessment.questionMedia = [];
    }

    this.assessment = { ...this.assessment, ...assessment } as AssessmentModel;
  }

  async addFunc() {
    const { questionMedia, ...assessment } = this.assessment;
    const { id } = await this.$api.assessment.create(assessment as AssessmentModel);
    await this.uploadMedia(id);
  }

  async updateFunc(id: number) {
    const { questionMedia, ...assessment } = this.assessment;
    await this.$api.assessment.update(id, assessment as AssessmentModel);
    await this.uploadMedia(id);
  }

  uploadMedia(id: number) {
    if (this.assessment.questionMedia.length) {
      return this.$api.media.upload(this.assessment.questionMedia, id, 'api::assessment.assessment', 'questionMedia');
    }
  }
}
