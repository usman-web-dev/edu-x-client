import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { CourseModel } from './course.model';

class CourseApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find('courses', params);
  }

  findOne(id: number) {
    return this._findOne('courses', id);
  }

  create(course: CourseModel) {
    return this._create<CourseModel>('courses', course);
  }

  update(id: number, course: CourseModel) {
    return this._update<CourseModel>('courses', id, course);
  }
}

export const course = new CourseApi();
