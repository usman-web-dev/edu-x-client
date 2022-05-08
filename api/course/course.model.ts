export class CourseModel {
  name = '';
  createdAt!: Date;
  updateAt!: Date;

  constructor(data?: Partial<CourseModel>) {
    Object.assign(this, data);
  }
}
