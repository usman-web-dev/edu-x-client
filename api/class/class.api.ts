import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { ClassModel } from './class.model';

class ClassApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find('classes', params);
  }

  findOne(id: number) {
    return this._findOne('classes', id);
  }

  create(classData: ClassModel) {
    return this._create<ClassModel>('classes', classData);
  }

  update(id: number, classData: ClassModel) {
    return this._update<ClassModel>('classes', id, classData);
  }

  delete(id: number) {
    return this._delete('classes', id);
  }
}

export const classApi = new ClassApi();
