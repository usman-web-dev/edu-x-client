import { BaseModel } from '../base.model';

export class CourseModel extends BaseModel {
  name = '';

  constructor(data?: Partial<CourseModel>) {
    super();
    Object.assign(this, data);
  }
}
