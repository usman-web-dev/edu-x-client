import { AssessmentType } from '~/utils';
import { BaseModel } from '../base.model';
import { CourseAssignmentModel } from '../course-assignment';
import { AssessmentSubmissionModel } from './assessment-submission.model';

export class AssessmentModel extends BaseModel {
  start = new Date();
  deadline: Date | null = null;
  course!: CourseAssignmentModel;
  submissions!: Array<AssessmentSubmissionModel>;
  questionText = '';
  totalMarks = 100;
  required = true;
  type: AssessmentType | null = null;
  subType = '';
}
