import { BaseModel } from '../base.model';
import { BatchModel } from '../batch';
import { SectionModel } from '../section';

export class ClassModel extends BaseModel {
  id!: number;
  name = '';
  batch!: BatchModel;
  sections!: Array<SectionModel>;

  constructor(data?: Partial<ClassModel>) {
    super();
    Object.assign(this, data);
  }
}
