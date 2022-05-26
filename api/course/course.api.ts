import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { CourseModel } from './course.model';

class CourseApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find('courses', params);
  }

  findOne(id: number, params?: ApiParamsModel) {
    return this._findOne('courses', id, params);
  }

  create(course: CourseModel) {
    return this._create<CourseModel>('courses', course);
  }

  update(id: number, course: CourseModel) {
    return this._update<CourseModel>('courses', id, course);
  }

  delete(id: number) {
    return this._delete('courses', id);
  }
}

export const course = new CourseApi();
