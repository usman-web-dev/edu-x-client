import { Route } from 'vue-router';

export type AnyObject = {
  [key: string]: any;
};

export type TableHeader = {
  id: string;
  title: string;
  width?: string;
  dir?: 'left' | 'center' | 'right';
  type?: 'date';
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

export type ListingAction = {
  name: string;
  icon: string;
  color: string;
  text: string;
};

export type OverrideListingAction = ListingAction | { name: string; hide: true };

export type DrawerLink = {
  title: string;
  icon: string;
  link?: string;
  params?: Route['params'];
  children?: Array<DrawerLink>;
};
