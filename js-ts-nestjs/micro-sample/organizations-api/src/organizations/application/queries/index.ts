export { GetOrganizationCriteriaQuery } from './get-all.query';
export { GetOrganizationByIdQuery } from './get-byid.query';

import { GetOrganizationQueryByIdHandler } from './get-byid.handler';
import { GetOrganizationCriteriaQueryHandler } from './get-all.handler';

export const OrganizationQueryHandlers = [
  GetOrganizationQueryByIdHandler,
  GetOrganizationCriteriaQueryHandler,
];
