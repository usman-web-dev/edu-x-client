import { BaseModel } from '../base.model';

export class CourseModel extends BaseModel {
  name = '';
  createdAt!: Date;
  updateAt!: Date;

  constructor(data?: Partial<CourseModel>) {
    super();
    Object.assign(this, data);
  }
}
