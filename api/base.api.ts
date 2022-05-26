import { Context } from '@nuxt/types';
import { Strapi } from '@nuxtjs/strapi';
import { AnyObject, NormalizedPaginationResponse, PaginationResponse, StrapiData } from '~/utils';
import { ApiParamsModel } from './shared';

export abstract class BaseApi {
  protected $strapi!: Strapi;
  protected $context!: Context;

  private mergeData(data: AnyObject | Array<AnyObject>): any {
    if (Array.isArray(data)) {
      return data.map(item => this.mergeData(item));
    } else if ((data.id && data.attributes) || data.data) {
      return this.mergeData(data.data ?? { id: data.id, ...data.attributes });
    }

    for (const key in data) {
      if (typeof data[key] === 'object' && !!data[key]?.data) {
        data[key] = this.mergeData(data[key].data);
      }
    }

    return data;
  }

  protected async normalizePaginationData<T>(
    func: () => Promise<PaginationResponse<T>>
  ): Promise<NormalizedPaginationResponse<T>> {
    const {
      data,
      meta: { pagination }
    } = await func();

    return {
      data: this.mergeData(data),
      pagination
    };
  }

  protected buildApiParams({ enablePagination, pagination: { page, pageSize }, ...apiParams }: ApiParamsModel) {
    return this.$context.$helpers.serializeQuery({
      ...(enablePagination ? { pagination: { page, pageSize } } : {}),
      ...apiParams
    });
  }

  protected _find<T>(entity: string, params: ApiParamsModel) {
    return this.normalizePaginationData<T>(() => this.$strapi.find(entity, this.buildApiParams(params)));
  }

  protected async _findOne<T>(entity: string, id: number, apiParams?: ApiParamsModel) {
    const data = await this.$strapi.findOne<StrapiData<T>>(
      entity,
      '' + id,
      apiParams ? this.buildApiParams(apiParams) : undefined
    );

    return this.mergeData(data) as T;
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
