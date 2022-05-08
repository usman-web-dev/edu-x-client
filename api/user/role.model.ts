import { RoleType } from '~/utils';

export class RoleModel {
  id!: number;
  type!: RoleType;
  name!: string;

  constructor(data?: Partial<RoleModel>) {
    Object.assign(this, data);
  }
}
