import { Context } from '@nuxt/types';
import { Strapi } from '@nuxtjs/strapi';
import { NormalizedPaginationResponse, PaginationResponse } from '~/utils';
import { ApiParamsModel } from './shared';

export abstract class BaseApi {
  $strapi!: Strapi;
  $context!: Context;

  normalizePaginationData<T>({ data, meta: { pagination } }: PaginationResponse<T>): NormalizedPaginationResponse<T> {
    return {
      data: data.map(({ id, attributes }) => ({ id, ...attributes })),
      pagination
    };
  }

  buildApiParams(apiParams: ApiParamsModel) {
    return this.$context.$helpers.serializeQuery(apiParams);
  }
}
