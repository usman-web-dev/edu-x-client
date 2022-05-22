import { BaseModel } from '../base.model';
import { BatchModel } from '../batch';
import { CourseModel } from '../course';
import { SectionModel } from '../section';

export class ClassModel extends BaseModel {
  id!: number;
  name = '';
  batch!: BatchModel;
  sections!: Array<SectionModel>;
  courses!: Array<CourseModel>;

  constructor(data?: Partial<ClassModel>) {
    super();
    Object.assign(this, data);
  }
}
