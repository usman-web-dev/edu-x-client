import { Pagination } from '~/utils';
import { BaseModel } from '../base.model';

export class ApiParamsModel extends BaseModel {
  pagination: Pagination = {
    page: 1,
    pageCount: 0,
    pageSize: 25,
    total: 0
  };

  get firstItem() {
    const { page, pageSize } = this.pagination;
    return (page - 1) * pageSize + 1;
  }

  get lastItem() {
    const { total, pageSize } = this.pagination;
    return Math.min(this.firstItem + pageSize, total);
  }

  constructor(data?: Partial<ApiParamsModel>) {
    super();
    Object.assign(this, data);
  }
}
