import { AssessmentType } from '~/utils';
import { AssessmentSubmissionModel } from '../assessment-submission';
import { BaseModel } from '../base.model';
import { CourseAssignmentModel } from '../course-assignment';

export class AssessmentModel extends BaseModel {
  start: Date | null = new Date();
  deadline: Date | null = null;
  course: CourseAssignmentModel | null = null;
  submissions!: Array<AssessmentSubmissionModel>;
  questionDescription = '';
  totalMarks = 100;
  required = true;
  type: AssessmentType | null = null;
  subType = '';
}
