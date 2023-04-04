import { DomainEvent } from '../../../shared/domain/event.domain';

export class OrganizationBlockedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'organization.blocked';
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
    super(OrganizationBlockedDomainEvent.EVENT_NAME, id, eventId, occurredOn);

    this.name = name;
  }
}
