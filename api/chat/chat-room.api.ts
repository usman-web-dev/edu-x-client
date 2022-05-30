import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { ChatRoomModel } from './chat-room.model';

class ChatRoomApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find<ChatRoomModel>('chat-rooms', params);
  }

  findOne(id: number, params?: ApiParamsModel) {
    return this._findOne('chat-rooms', id, params);
  }
}

export const chatRoom = new ChatRoomApi();
