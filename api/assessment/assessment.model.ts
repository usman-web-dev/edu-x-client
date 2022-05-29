import { AssessmentType } from '~/utils';
import { AssessmentSubmissionModel } from '../assessment-submission';
import { BaseModel } from '../base.model';
import { CourseAssignmentModel } from '../course-assignment';
import { MediaModel } from '../media';

export class AssessmentModel extends BaseModel {
  id!: number;
  start: Date | null = new Date();
  deadline: Date | null = null;
  course: CourseAssignmentModel | null = null;
  submissions!: Array<AssessmentSubmissionModel>;
  questionDescription = '';
  questionMedia: Array<MediaModel> = [];
  totalMarks = 100;
  required = true;
  type: AssessmentType | null = null;
  subType = '';
}
