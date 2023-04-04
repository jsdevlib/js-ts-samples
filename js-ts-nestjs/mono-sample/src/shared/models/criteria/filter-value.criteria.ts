import { StringValueObject } from '../../domain/value-object/string.valueobject';

export class FilterValue extends StringValueObject {
  constructor(value: string) {
    super(value);
  }
}
