import { Route } from 'vue-router';
import { RoleType } from './enums';

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

export type StrapiData<T, D extends 'array' | 'single' = 'single'> = {
  data: D extends 'single' ? { id: number; attributes: T } : Array<{ id: number; attributes: T }>;
};

export type PaginationResponse<T> = StrapiData<T, 'array'> & {
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
  roles?: Array<RoleType>;
};

export type OverrideListingAction = ListingAction | ({ name: string } & ({ hide: true } | { roles: Array<RoleType> }));

export type DrawerLink = {
  title: string;
  icon: string;
  link?: string;
  params?: Route['params'];
  children?: Array<DrawerLink>;
  roles?: Array<RoleType>;
};
