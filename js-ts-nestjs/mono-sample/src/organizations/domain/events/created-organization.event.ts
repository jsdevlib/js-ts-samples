import { DomainEvent } from '../../../shared/domain/event.domain';

export class OrganizationCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'organization.created';
  readonly name: string;

  constructor({
    id,
    eventId,
    name,
    occurredOn,
  }: {
    id: string;
    eventId?: string;
    name: string;
    occurredOn?: Date;
  }) {
    super(OrganizationCreatedDomainEvent.EVENT_NAME, id, eventId, occurredOn);

    this.name = name;
  }
}
