import { AssessmentModel } from '../assessment/assessment.model';
import { BaseModel } from '../base.model';
import { MediaModel } from '../media';
import { UserModel } from '../user';

export class AssessmentSubmissionModel extends BaseModel {
  id!: number;
  assessment: AssessmentModel | null = null;
  student!: UserModel;
  obtainedMarks = 0;
  answers: Array<MediaModel> = [];

  constructor(data?: Partial<AssessmentSubmissionModel>) {
    super();
    Object.assign(this, data);
  }
}
