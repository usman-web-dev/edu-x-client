import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, NotificationModel } from '~/api';

@Component
export default class NotificationsComponent extends Vue {
  notifications: Array<NotificationModel> = [];
  apiParams = new ApiParamsModel({
    filters: {
      users: {
        id: {
          $eq: this.$strapi.user.id
        }
      }
    }
  });

  async fetch() {
    const { data } = await this.$api.notification.find(this.apiParams);
    this.notifications = data;
  }
}
