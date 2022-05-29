import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { NotificationModel } from './notification.model';

class NotificationApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find<NotificationModel>('notifications', params);
  }
}

export const notification = new NotificationApi();
