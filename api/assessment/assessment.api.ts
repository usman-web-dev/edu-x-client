import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { AssessmentModel } from './assessment.model';

class AssessmentApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find<AssessmentModel>('assessments', params);
  }

  findOne(id: number, params?: ApiParamsModel) {
    return this._findOne<AssessmentModel>('assessments', id, params);
  }

  create(assessment: AssessmentModel) {
    return this._create<AssessmentModel>('assessments', assessment);
  }

  update(id: number, assessment: AssessmentModel) {
    return this._update<AssessmentModel>('assessments', id, assessment);
  }

  delete(id: number) {
    return this._delete('assessments', id);
  }
}

export const assessment = new AssessmentApi();
