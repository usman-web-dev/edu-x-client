import { BaseApi } from '../base.api';
import { ApiParamsModel } from '../shared';
import { UserModel } from './user.model';

class UserApi extends BaseApi {
  find(params: ApiParamsModel) {
    return this._find('users', params);
  }

  findOne(id: number) {
    return this._findOne('users', id);
  }

  create(user: UserModel) {
    return this._create<UserModel>('users', user);
  }

  update(id: number, user: UserModel) {
    return this._update<UserModel>('users', id, user);
  }
}

export const user = new UserApi();
