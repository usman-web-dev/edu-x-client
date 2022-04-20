import { instanceToPlain } from 'class-transformer';

export class BaseModel {
  protected toJSON() {
    return instanceToPlain(this);
  }
}
