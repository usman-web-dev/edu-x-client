import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { GradeModel } from './grade.model';

class GradeApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find('grades', params);
  }

  findOne(id: number, params?: ApiParamsModel) {
    return this._findOne('grades', id, params);
  }

  create(grade: GradeModel) {
    return this._create<GradeModel>('grades', grade);
  }

  update(id: number, grade: GradeModel) {
    return this._update<GradeModel>('grades', id, grade);
  }

  delete(id: number) {
    return this._delete('grades', id);
  }
}

export const grade = new GradeApi();
