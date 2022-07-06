import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, CourseAssignmentModel, MeetingDetailModel, MeetingModel, RoleModel, UserModel } from '~/api';
import { RoleType } from '~/utils';

@Component
export default class MeetingAddView extends Vue {
  meeting = new MeetingModel();
  editApiParams = new ApiParamsModel({ populate: ['meetingDetails.attendee'] });
  courseAssignmentApiParams = new ApiParamsModel({
    populate: ['course', 'section.class', 'students', 'teacher']
  });
  days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;
  meetingAttendees: Array<UserModel> = [];
  oldMeetingDetails: Array<MeetingDetailModel> = [];

  get subtitle() {
    const { course, section } = this.meeting.course ?? new CourseAssignmentModel();
    return `Add a new meeting for ${course?.name ?? ''} (${section?.class?.name ?? ''}/${section?.name ?? ''})`;
  }

  get attendees() {
    return [
      new UserModel({ ...this.meeting.course?.teacher, role: new RoleModel({ id: RoleType.TEACHER }) }),
      { divider: true },
      { header: 'Students' },
      ...(this.meeting.course?.students ?? [])
    ].filter(attendee => ('id' in attendee ? this.$strapi.user.id !== attendee.id : true));
  }

  async fetch() {
    this.meeting.course = await this.$api.courseAssignment.findOne(
      +this.$route.params.cid,
      this.courseAssignmentApiParams
    );
  }

  onEditData(meeting: MeetingModel) {
    if (!meeting.meetingDetails) {
      meeting.meetingDetails = [];
    } else {
      this.oldMeetingDetails = meeting.meetingDetails.map(md => ({ ...md } as MeetingDetailModel));
      this.meetingAttendees = meeting.meetingDetails.map(({ attendee }) => attendee);
    }

    this.meeting = { ...this.meeting, ...meeting } as MeetingModel;
  }

  handleMeetingDetails() {
    this.meeting.meetingDetails = this.meetingAttendees.map(attendee => {
      const meetingDetail = attendee.id
        ? this.oldMeetingDetails.find(({ attendee: { id } }) => id === attendee.id)
        : undefined;

      return new MeetingDetailModel({
        id: meetingDetail?.id,
        attendee,
        accepted: null
      });
    });
  }

  async addFunc() {
    this.handleMeetingDetails();
    await this.$api.meeting.create(this.meeting);
  }

  async updateFunc(id: number) {
    this.handleMeetingDetails();
    await this.$api.meeting.update(id, this.meeting, this.oldMeetingDetails);
  }

  onRecurringChange(value: boolean) {
    this.days.forEach(day => {
      this.meeting[day] = value ? true : null;
    });
  }
}
