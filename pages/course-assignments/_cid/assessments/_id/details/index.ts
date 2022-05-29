import * as dateFns from 'date-fns';
import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, AssessmentModel, AssessmentSubmissionModel } from '~/api';

@Component
export default class AssessmentDetailsView extends Vue {
  submission = new AssessmentSubmissionModel();

  get assessment() {
    return this.submission.assessment ?? new AssessmentModel();
  }

  get isSubmission() {
    return this.$route.params.subid;
  }

  apiParams = new ApiParamsModel({
    populate: ['answers', 'student', 'assessment.course.course', 'assessment.questionMedia'],
    filters: {
      ...(this.isSubmission
        ? {}
        : {
            student: {
              id: {
                $eq: this.$strapi.user.id
              }
            }
          }),
      assessment: { id: { $eq: +this.$route.params.id } }
    },
    pagination: {
      page: 1,
      total: 0,
      pageCount: 0,
      pageSize: 1
    },
    enablePagination: !this.isSubmission
  });

  get title() {
    const { type, subType } = this.submission.assessment ?? new AssessmentModel();
    return `${this.$helpers.titleize(type ?? '')} (${subType})`;
  }

  get subtitle() {
    return `Course Name: ${this.submission.assessment?.course?.course?.name ?? ''}`;
  }

  async editDataFunc(id: number) {
    if (this.isSubmission) {
      return this.$api.assessmentSubmission.findOne(id, this.apiParams);
    }

    const { data } = await this.$api.assessmentSubmission.find(this.apiParams);

    const submission = new AssessmentSubmissionModel(data?.[0]);

    if (!data.length) {
      submission.assessment = await this.$api.assessment.findOne(
        +this.$route.params.id,
        new ApiParamsModel({
          populate: ['course.course', 'questionMedia']
        })
      );
    }

    return submission;
  }

  countdown = '';
  timeLeft = 0;

  countdownInterval!: NodeJS.Timer;

  beforeDestroy() {
    this.clearInterval();
  }

  onEditData(submission: AssessmentSubmissionModel) {
    this.submission = { ...this.submission, ...submission } as AssessmentSubmissionModel;

    if (!this.isSubmission) {
      this.countdownInterval = setInterval(this.handleCountdown, 1000);
    }
  }

  handleCountdown() {
    let { deadline } = this.assessment;
    const now = new Date();

    if (!deadline) {
      return this.clearInterval();
    }

    deadline = new Date(deadline!);

    if (now > deadline) {
      return this.clearInterval();
    }

    const result: Array<string> = [];
    let parts = ['month', 'day', 'hour', 'minute', 'second'];

    parts.forEach((p, i) => {
      const uP = this.$helpers.titleize(p);
      let t = (dateFns as any)[`differenceIn${uP}s`](deadline, now);
      if (t) {
        result.push(
          `${i === parts.length - 1 && this.countdown.length > 11 ? 'and ' : ''}${t} ${uP}${t === 1 ? '' : 's'}`
        );
        if (i < parts.length) deadline = (dateFns as any)[`sub${uP}s`](deadline, t);
      }
    });

    this.timeLeft = Math.abs(
      dateFns.differenceInMinutes(now, this.assessment.deadline ? new Date(this.assessment.deadline) : new Date())
    );
    this.countdown = result.join(' ');

    if (!this.countdown) {
      return this.clearInterval();
    }
  }

  clearInterval() {
    clearInterval(this.countdownInterval);
    this.countdown = 'Expired';
  }

  async updateFunc() {
    const { answers, ...submission } = this.submission;
    if (!submission.id) {
      submission.student = this.$strapi.user as any;
      const { id } = await this.$api.assessmentSubmission.create(submission as AssessmentSubmissionModel);
      !this.isSubmission && (await this.uploadMedia(id));
    } else {
      await this.$api.assessmentSubmission.update(submission.id, submission as AssessmentSubmissionModel);
      !this.isSubmission && (await this.uploadMedia(submission.id));
    }
  }

  uploadMedia(id: number) {
    return this.$api.media.upload(
      this.submission.answers,
      id,
      'api::assessment-submission.assessment-submission',
      'answers'
    );
  }
}
