import { BaseModel } from '../base.model';
import { UserModel } from '../user';

export class AssessmentSubmissionModel extends BaseModel {
  student!: UserModel;
  obtainedMarks = 0;
}
