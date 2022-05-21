import { BaseModel } from '../base.model';
import { ClassModel } from '../class';

export class SectionModel extends BaseModel {
  name = '';
  class!: ClassModel;

  constructor(data?: Partial<SectionModel>) {
    super();
    Object.assign(this, data);
  }
}
