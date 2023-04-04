import { InvalidArgumentError } from '../../domain/value-object/invalid-argument.valueobject';
import { FilterField } from './filter-field.criteria';
import { FilterOperator } from './filter-operator.criteria';
import { FilterValue } from './filter-value.criteria';

export class Filter {
  readonly field: FilterField;
  readonly operator: FilterOperator;
  readonly value: FilterValue;

  constructor(
    field: FilterField,
    operator: FilterOperator,
    value: FilterValue,
  ) {
    this.field = field;
    this.operator = operator;
    this.value = value;
  }

  static fromValues(values: Map<string, string>): Filter {
    const field = values.get('field');
    const operator = values.get('operator');
    const value = values.get('value');

    if (!field || !operator || !value) {
      throw new InvalidArgumentError(`The filter is invalid`);
    }

    return new Filter(
      new FilterField(field),
      FilterOperator.fromValue(operator),
      new FilterValue(value),
    );
  }
}
