import { Context } from '@nuxt/types';
import { Strapi } from '@nuxtjs/strapi';
import { NormalizedPaginationResponse, PaginationResponse } from '~/utils';
import { ApiParamsModel } from './shared';

export abstract class BaseApi {
  $strapi!: Strapi;
  $context!: Context;

  protected async normalizePaginationData<T>(
    func: () => Promise<PaginationResponse<T>>
  ): Promise<NormalizedPaginationResponse<T>> {
    const {
      data,
      meta: { pagination }
    } = await func();

    return {
      data: data.map(({ id, attributes }) => ({ id, ...attributes })),
      pagination
    };
  }

  protected buildApiParams(apiParams: ApiParamsModel) {
    return this.$context.$helpers.serializeQuery(apiParams);
  }

  protected _find<T>(entity: string, params: ApiParamsModel) {
    return this.normalizePaginationData<T>(() => this.$strapi.find(entity, this.buildApiParams(params)));
  }

  protected async _findOne<T>(entity: string, id: number) {
    const {
      data: { id: dId, attributes }
    } = await this.$strapi.findOne(entity, '' + id);

    return { id: dId, ...attributes } as T;
  }

  protected _create<T, E = T>(entity: string, data: T) {
    return this.$strapi.create<E>(entity, { data } as any);
  }

  protected _update<T, E = T>(entity: string, id: number, data: T) {
    return this.$strapi.update<E>(entity, '' + id, { data } as any);
  }
  protected _delete(entity: string, id: number) {
    return this.$strapi.delete(entity, '' + id);
  }
}
