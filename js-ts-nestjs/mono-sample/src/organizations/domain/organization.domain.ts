import { AggregateRoot } from '@nestjs/cqrs';

import { OrganizationCreatedDomainEvent } from './events';
import { OrganizationId } from './id.domain';
import { OrganizationName } from './name.domain';
import { OrganizationBlockedDomainEvent } from './events/blocked-organization.event';

export enum OrganizationStatus {
  INACTIVE = 0,
  ACTIVE = 1,
  BLOCKED = 2,
}

export class Organization extends AggregateRoot {
  readonly id: OrganizationId;
  readonly name: OrganizationName;
  status: OrganizationStatus;

  constructor(id: OrganizationId, name: OrganizationName) {
    super();

    this.id = id;
    this.name = name;
    this.status = OrganizationStatus.ACTIVE;
  }

  static create(id: OrganizationId, name: OrganizationName): Organization {
    const organization = new Organization(id, name);

    const eventData = {
      id: organization.id.value,
      name: organization.name.value,
    };

    organization.apply(new OrganizationCreatedDomainEvent({ ...eventData }));

    return organization;
  }

  Block() {
    this.status = OrganizationStatus.BLOCKED;

    const eventData = {
      id: this.id.value,
      name: this.name.value,
    };

    this.apply(new OrganizationBlockedDomainEvent({ ...eventData }));
  }
}
