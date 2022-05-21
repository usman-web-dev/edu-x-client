import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { SectionModel } from './section.model';

class SectionApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find('sections', params);
  }

  findOne(id: number) {
    return this._findOne('sections', id);
  }

  create(section: SectionModel) {
    return this._create<SectionModel>('sections', section);
  }

  update(id: number, section: SectionModel) {
    return this._update<SectionModel>('sections', id, section);
  }

  delete(id: number) {
    return this._delete('sections', id);
  }
}

export const section = new SectionApi();
