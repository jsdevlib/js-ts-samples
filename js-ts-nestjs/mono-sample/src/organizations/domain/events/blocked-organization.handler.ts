import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { OrganizationBlockedDomainEvent } from './blocked-organization.event';

@EventsHandler(OrganizationBlockedDomainEvent)
export class OrganizationBlockedDomainEventHandler
  implements IEventHandler<OrganizationBlockedDomainEvent>
{
  handle(event: OrganizationBlockedDomainEvent) {
    console.log('printing events');
  }
}
