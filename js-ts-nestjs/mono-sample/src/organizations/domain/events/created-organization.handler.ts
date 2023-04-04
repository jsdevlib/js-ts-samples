import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { OrganizationCreatedDomainEvent } from './created-organization.event';

@EventsHandler(OrganizationCreatedDomainEvent)
export class OrganizationCreatedDomainEventHandler
  implements IEventHandler<OrganizationCreatedDomainEvent>
{
  handle(event: OrganizationCreatedDomainEvent) {
    console.log('printing events');
  }
}
