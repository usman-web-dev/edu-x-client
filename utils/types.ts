export type AnyObject = {
  [key: string]: any;
};

export type TableHeader = {
  id: string;
  title: string;
  width?: string;
  dir?: 'left' | 'center' | 'right';
};

export type Pagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};

export type PaginationResponse<T> = {
  data: Array<{ id: number; attributes: T }>;
  meta: {
    pagination: Pagination;
  };
};

export type NormalizedPaginationResponse<T> = {
  data: Array<T>;
  pagination: Pagination;
};
