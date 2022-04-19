import { instanceToPlain } from 'class-transformer';

export class BaseModel {
  toJSON() {
    return instanceToPlain(this);
  }
}
