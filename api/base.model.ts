import { instanceToPlain } from 'class-transformer';

export class BaseEntity {
  toJSON() {
    return instanceToPlain(this);
  }
}
