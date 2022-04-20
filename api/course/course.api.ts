import { NormalizedPaginationResponse } from '~/utils';
import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { CourseModel } from './course.model';

class CourseApi extends BaseApi {
  async find(params: ApiParamsModel) {
    return this.$strapi.find<NormalizedPaginationResponse<CourseModel>>('courses', this.buildApiParams(params));
  }
}

export const course = new CourseApi();
