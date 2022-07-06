import { isPast } from 'date-fns';
import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, CourseAssignmentModel, MeetingDetailModel, MeetingModel, UserModel } from '~/api';

@Component
export default class MeetingAddView extends Vue {
  meeting = new MeetingModel();
  apiParams = new ApiParamsModel({
    populate: ['meetingDetails.attendee', 'host', 'course.section.class', 'course.course']
  });
  days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;

  get subtitle() {
    const { course, section } = this.meeting.course ?? new CourseAssignmentModel();
    return `${course?.name ?? ''} (${section?.class?.name ?? ''}/${section?.name ?? ''})`;
  }

  async fetch() {
    this.meeting = await this.$api.meeting.findOne(+this.$route.params.id, this.apiParams);
  }

  get attendees() {
    return [
      new MeetingDetailModel({ attendee: new UserModel(this.meeting.host), accepted: true }),
      ...this.meeting.meetingDetails
    ];
  }

  get ownMeeting() {
    return this.attendees.find(({ attendee: { id } }) => id === this.$strapi.user.id)!;
  }

  get isMeetingPassed() {
    const { end } = this.meeting;
    if (!end) {
      return true;
    }

    return isPast(new Date(this.meeting.end!)) && !this.meeting.recurring;
  }

  get isHost() {
    return this.meeting?.host?.id === this.$strapi.user.id;
  }

  async acceptMeeting(id: number, accepted: boolean) {
    if (!this.isHost && !this.isMeetingPassed) {
      const meetingDetail = this.meeting.meetingDetails.find(({ id: mdId }) => id === mdId);

      if (meetingDetail) {
        await this.$api.meetingDetail.accept(id, accepted);
        meetingDetail.accepted = accepted;
      }
    }
  }

  async deleteMeeting() {
    if (await this.$confirm.confirm('Delete Confirmation', 'Are you sure you want to delete?')) {
      await this.$api.meeting.delete(this.meeting);
      this.$router.replace('/calendar');
    }
  }

  formatDate(date: Date | null) {
    return this.$helpers.formatDate(
      date ?? new Date(),
      this.meeting.recurring ? 'h:mm a' : undefined,
      this.meeting.recurring ? false : true
    );
  }

  getStatusColor(accepted: boolean | null) {
    return accepted != null
      ? accepted
        ? { color: 'success', title: 'Accepted' }
        : { color: 'error', title: 'Rejected' }
      : { color: 'primary', title: 'Not responded yet' };
  }
}
