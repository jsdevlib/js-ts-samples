import { StringValueObject } from '../../domain/value-object/string.valueobject';

export class FilterField extends StringValueObject {
  constructor(value: string) {
    super(value);
  }
}
