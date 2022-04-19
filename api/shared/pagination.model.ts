import { BaseModel } from '../base.model';

export class PaginationModel extends BaseModel {
  private _currentPage = 1;
  private _totalItems = 0;
  perPage = 25;

  get currentPage() {
    return this._currentPage;
  }
  set currentPage(val: number) {
    if (val <= this.totalPages) {
      this._currentPage = val;
    }
  }

  set totalItems(val: number) {
    this._totalItems = val;
  }

  get totalPages() {
    return Math.ceil(this._totalItems / this.perPage);
  }
  get isNextDisabled() {
    return (
      !this.totalPages ||
      (this.totalPages && this.currentPage === this.totalPages) ||
      this.currentPage > this.totalPages
    );
  }
  get isPreviousDisabled() {
    return this.currentPage <= 1 || this.currentPage > this.totalPages;
  }

  public next() {
    if (!this.isNextDisabled) {
      this.currentPage++;
    }
  }
  public previous() {
    if (!this.isPreviousDisabled) {
      this.currentPage--;
    }
  }

  public toQueryObj() {
    return {
      page: this.currentPage,
      limit: this.perPage
    };
  }

  constructor(data?: Partial<PaginationModel>) {
    super();
    Object.assign(this, data);
  }
}
