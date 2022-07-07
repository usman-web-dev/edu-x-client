import '@fullcalendar/core/vdom';
import InteractionPlugin from '@fullcalendar/interaction';
import ListPlugin from '@fullcalendar/list';
import FullCalendar, { CalendarOptions, EventSourceInput } from '@fullcalendar/vue';
import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, MeetingDetailModel } from '~/api';

@Component({
  components: {
    FullCalendar
  }
})
export default class CalendarView extends Vue {
  $refs!: {
    fullCalendarRef: InstanceType<typeof FullCalendar>;
  };

  apiParams = new ApiParamsModel({
    filters: {
      $or: [
        {
          attendee: {
            id: {
              $eq: this.$strapi.user.id
            }
          }
        },
        {
          meeting: {
            host: {
              id: {
                $eq: this.$strapi.user.id
              }
            }
          }
        }
      ]
    },
    populate: ['meeting.host', 'meeting.course']
  });

  meetings: Array<MeetingDetailModel> = [];

  calendarOptions: CalendarOptions = {
    nowIndicator: true,
    initialView: 'listMonth',
    headerToolbar: {
      center: 'listDay,listWeek,listMonth'
    },
    buttonText: {
      listDay: 'Daily',
      listWeek: 'Weekly',
      listMonth: 'Monthly'
    },
    eventClick: ({
      event: {
        id,
        extendedProps: { courseAssignmentId }
      }
    }) => {
      this.$router.push({ name: 'course-assignments-cid-meetings-id-edit', params: { cid: courseAssignmentId, id } });
    },
    plugins: [InteractionPlugin, ListPlugin]
  };

  get calendar() {
    return this.$refs.fullCalendarRef.getApi();
  }

  get events(): EventSourceInput {
    const { primary, success, error } = this.$vuetify.theme.currentTheme;
    return this.meetings.map(({ accepted, meeting }) => ({
      title: meeting?.title,
      color: (accepted != null ? (accepted ? success : error) : primary)?.toString(),
      start: meeting?.start!,
      end: meeting?.end!,
      editable: meeting?.host.id === this.$strapi.user.id,
      id: `${meeting?.id}`,
      extendedProps: {
        courseAssignmentId: meeting?.course?.id
      }
    }));
  }

  async fetch() {
    const { data } = await this.$api.meetingDetail.find(this.apiParams);
    this.meetings = data;
    this.calendar.addEventSource(this.events);
  }
}
