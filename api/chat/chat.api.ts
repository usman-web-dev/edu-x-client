import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { ChatModel } from './chat.model';

class ChatApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find('chats', params);
  }

  create(chat: ChatModel) {
    return this._create<ChatModel>('chats', chat);
  }
}

export const chat = new ChatApi();
