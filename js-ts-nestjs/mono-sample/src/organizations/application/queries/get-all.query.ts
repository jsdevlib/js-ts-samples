import { Criteria } from 'src/shared/models/criteria/criteria';

export class GetOrganizationCriteriaQuery extends Criteria {
  constructor(criteria: Criteria) {
    super(criteria.filters, criteria.order, criteria.limit, criteria.offset);
  }
}
