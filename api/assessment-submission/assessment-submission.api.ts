import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { AssessmentSubmissionModel } from './assessment-submission.model';

class AssessmentSubmissionApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find<AssessmentSubmissionModel>('assessment-submissions', params);
  }

  findOne(id: number, params?: ApiParamsModel) {
    return this._findOne<AssessmentSubmissionModel>('assessment-submissions', id, params);
  }

  create(assessment: AssessmentSubmissionModel) {
    return this._create<AssessmentSubmissionModel>('assessment-submissions', assessment);
  }

  update(id: number, assessment: AssessmentSubmissionModel) {
    return this._update<AssessmentSubmissionModel>('assessment-submissions', id, assessment);
  }

  delete(id: number) {
    return this._delete('assessment-submissions', id);
  }
}

export const assessmentSubmission = new AssessmentSubmissionApi();
