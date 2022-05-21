import { BaseModel } from '../base.model';

export class ClassModel extends BaseModel {
  name = '';

  constructor(data?: Partial<ClassModel>) {
    super();
    Object.assign(this, data);
  }
}
