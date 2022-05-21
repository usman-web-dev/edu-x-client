import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { CourseAssignmentModel } from './course-assignment.model';

class CourseAssignmentApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find('course-assignments', params);
  }

  findOne(id: number) {
    return this._findOne('course-assignments', id);
  }

  create(courseAssignment: CourseAssignmentModel) {
    return this._create<CourseAssignmentModel>('course-assignments', courseAssignment);
  }

  update(id: number, courseAssignment: CourseAssignmentModel) {
    return this._update<CourseAssignmentModel>('course-assignments', id, courseAssignment);
  }

  delete(id: number) {
    return this._delete('course-assignments', id);
  }
}

export const courseAssignment = new CourseAssignmentApi();
