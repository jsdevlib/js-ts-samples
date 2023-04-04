import { StringValueObject } from '../../domain/value-object/string.valueobject';

export class OrderBy extends StringValueObject {
  constructor(value: string) {
    super(value);
  }
}
