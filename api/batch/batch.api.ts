import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { BatchModel } from './batch.model';

class BatchApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find('batches', params);
  }

  findOne(id: number, params?: ApiParamsModel) {
    return this._findOne('batches', id, params);
  }

  create(batch: BatchModel) {
    return this._create<BatchModel>('batches', batch);
  }

  update(id: number, batch: BatchModel) {
    return this._update<BatchModel>('batches', id, batch);
  }

  delete(id: number) {
    return this._delete('batches', id);
  }
}

export const batch = new BatchApi();
