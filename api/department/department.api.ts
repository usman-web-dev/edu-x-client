import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { DepartmentModel } from './department.model';

class DepartmentApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find('departments', params);
  }

  findOne(id: number) {
    return this._findOne('departments', id);
  }

  create(department: DepartmentModel) {
    return this._create<DepartmentModel>('departments', department);
  }

  update(id: number, department: DepartmentModel) {
    return this._update<DepartmentModel>('departments', id, department);
  }

  delete(id: number) {
    return this._delete('departments', id);
  }
}

export const department = new DepartmentApi();
