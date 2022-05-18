import { BaseModel } from '../base.model';

export class ClassModel extends BaseModel {
  name = '';
  createdAt!: Date;
  updateAt!: Date;

  constructor(data?: Partial<ClassModel>) {
    super();
    Object.assign(this, data);
  }
}
