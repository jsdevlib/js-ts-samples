export { OrganizationCreatedDomainEvent } from './created-organization.event';
export { OrganizationBlockedDomainEvent } from './blocked-organization.event';

import { OrganizationCreatedDomainEventHandler } from './created-organization.handler';
import { OrganizationBlockedDomainEventHandler } from './blocked-organization.handler';

export const OrganizationDomainEventHandlers = [
  OrganizationCreatedDomainEventHandler,
  OrganizationBlockedDomainEventHandler,
];
