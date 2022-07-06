import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { MeetingDetailModel } from './meeting-detail.model';
import { MeetingModel } from './meeting.model';

class MeetingApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find('meetings', params);
  }

  findOne(id: number, params?: ApiParamsModel) {
    return this._findOne<MeetingModel>('meetings', id, params);
  }

  async create({ meetingDetails, ...meetingData }: MeetingModel) {
    const meeting: MeetingModel = await this._create('meetings', meetingData);

    meetingDetails.forEach(meetingDetail => {
      meetingDetail.meeting = { ...meetingData, ...meeting } as MeetingModel;
    });

    return Promise.all(meetingDetails.map(meetingDetail => this._create('meeting-details', meetingDetail)));
  }

  async update(
    id: number,
    { meetingDetails, ...meetingData }: MeetingModel,
    oldMeetingDetails: Array<MeetingDetailModel>
  ) {
    await this._update('meetings', id, meetingData);

    const meetingDetailsToCreate = meetingDetails.filter(({ id }) => !id);
    const meetingDetailsToUpdate = meetingDetails.filter(({ id }) => !!id);
    const meetingDetailsToDelete = oldMeetingDetails.filter(
      ({ id: mdId }) => !meetingDetails.find(({ id }) => id === mdId)
    );

    meetingDetailsToCreate.forEach(meetingDetail => {
      meetingDetail.meeting = meetingData as MeetingModel;
    });
    meetingDetailsToUpdate.forEach(meetingDetail => {
      meetingDetail.meeting = meetingData as MeetingModel;
    });

    return Promise.all([
      ...meetingDetailsToCreate.map(meetingDetail => this._create('meeting-details', meetingDetail)),
      ...meetingDetailsToUpdate.map(meetingDetail => this._update('meeting-details', meetingDetail.id, meetingDetail)),
      ...meetingDetailsToDelete.map(meetingDetail => this._delete('meeting-details', meetingDetail.id))
    ]);
  }

  async delete({ id, meetingDetails }: MeetingModel) {
    await this._delete('meetings', id);

    for (const { id: mdId } of meetingDetails) {
      await this._delete('meeting-details', mdId);
    }
  }
}

export const meeting = new MeetingApi();
