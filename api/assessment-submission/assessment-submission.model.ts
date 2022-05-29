import { AssessmentModel } from '../assessment/assessment.model';
import { BaseModel } from '../base.model';
import { UserModel } from '../user';

export class AssessmentSubmissionModel extends BaseModel {
  assessment!: AssessmentModel;
  student!: UserModel;
  obtainedMarks = 0;
}
