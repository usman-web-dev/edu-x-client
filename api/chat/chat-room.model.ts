import { BaseModel } from '../base.model';
import { CourseAssignmentModel } from '../course-assignment';
import { ChatModel } from './chat.model';

export class ChatRoomModel extends BaseModel {
  id!: number;
  chats!: Array<ChatModel>;
  course: CourseAssignmentModel | null = null;

  constructor(data?: Partial<ChatRoomModel>) {
    super();
    Object.assign(this, data);
  }
}
