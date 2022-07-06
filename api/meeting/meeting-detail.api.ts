import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { MeetingDetailModel } from './meeting-detail.model';

class MeetingDetailApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find<MeetingDetailModel>('meeting-details', params);
  }

  findOne(id: number, params?: ApiParamsModel) {
    return this._findOne<MeetingDetailModel>('meeting-details', id, params);
  }

  accept(id: number, accepted: boolean) {
    return this._update('meeting-details', id, { id, accepted });
  }
}

export const meetingDetail = new MeetingDetailApi();
