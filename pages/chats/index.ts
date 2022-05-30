import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel } from '~/api';
import { ChatRoomModel } from '~/api/chat';

@Component
export default class ClassesView extends Vue {
  apiParams = new ApiParamsModel({ populate: ['course.section.class', 'course.course'] });
  chatRooms: Array<ChatRoomModel> = [];
  selectedChatRoom: ChatRoomModel | null = null;

  getTitle({ course }: ChatRoomModel) {
    return `${course?.course?.name ?? ''} (${course?.section?.class?.name ?? ''}/${course?.section?.name ?? ''})`;
  }

  async fetch() {
    const { data } = await this.$api.chatRoom.find(this.apiParams);
    this.chatRooms = data;
  }
}
