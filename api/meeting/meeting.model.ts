import { BaseModel } from '../base.model';
import { CourseAssignmentModel } from '../course-assignment';
import { UserModel } from '../user';
import { MeetingDetailModel } from './meeting-detail.model';

export class MeetingModel extends BaseModel {
  id!: number;
  title = '';
  host!: UserModel;
  meetingUrl: string | null = null;
  start: Date | null = null;
  end: Date | null = null;
  course: CourseAssignmentModel | null = null;
  meetingDetails: Array<MeetingDetailModel> = [];
  description = '';
  recurring = false;
  monday: boolean | null = null;
  tuesday: boolean | null = null;
  wednesday: boolean | null = null;
  thursday: boolean | null = null;
  friday: boolean | null = null;
  saturday: boolean | null = null;
  sunday: boolean | null = null;
}
