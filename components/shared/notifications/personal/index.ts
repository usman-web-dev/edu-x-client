import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, NotificationModel } from '~/api';
import { AnyObject } from '~/utils';

@Component
export default class NotificationsComponent extends Vue {
  notifications: Array<NotificationModel> = [];
  apiParams = new ApiParamsModel({
    filters: {
      user: {
        id: {
          $eq: this.$strapi.user.id
        }
      }
    },
    sort: ['createdAt:desc']
  });

  async fetch() {
    const { data } = await this.$api.notification.find(this.apiParams);
    this.notifications = data;
  }

  get notificationCount() {
    return this.notifications.reduce((sum, { read }) => (sum += +!read), 0);
  }

  created() {
    this.$nuxtSocket({ extraHeaders: { authorization: `Bearer ${this.$strapi.getToken()}` } }).on(
      'notification',
      notification => {
        const audio = new Audio('/sounds/notification.mp3');
        audio.play();
        this.notifications = [notification, ...this.notifications];
      }
    );
  }

  async readNotification(idx?: number) {
    const notifications = idx !== undefined ? [this.notifications[idx]] : this.notifications;

    for (const notification of notifications) {
      await this.$api.notification.read(notification.id);

      notification.read = true;
    }
  }

  async handleNotificationClick(idx: number, { type, extra, read }: Partial<NotificationModel>) {
    const extraParams: AnyObject = {};
    let routeName = '';

    if (type === 'assessment') {
      routeName = '-assessments';
    } else if (type === 'marks') {
      extraParams['id'] = extra?.assessmentId;
      routeName = '-assessments-id-details';
    } else if (type === 'meeting') {
      extraParams['id'] = extra?.meetingId;
      routeName = '-meetings-id-view';
    }

    this.$router.push({
      name: `course-assignments-cid${routeName}`,
      params: { cid: extra?.courseAssignmentId, ...extraParams }
    });

    !read && (await this.readNotification(idx));
  }
}
