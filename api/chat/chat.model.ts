import { BaseModel } from '../base.model';
import { ChatRoomModel } from './chat-room.model';

export class ChatModel extends BaseModel {
  id!: number;
  text = '';
  chatRoom: ChatRoomModel | null = null;

  constructor(data?: Partial<ChatModel>) {
    super();
    Object.assign(this, data);
  }
}
