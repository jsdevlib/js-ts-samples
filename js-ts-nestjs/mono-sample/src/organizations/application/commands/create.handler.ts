import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import {
  Organization,
  OrganizationId,
  OrganizationName,
} from 'src/organizations/domain';
import { OrganizationRepository } from 'src/organizations/infrastructure/database';
import { CreateOrganizationCommand } from './create.command';
import { Uuid } from '../../../shared/domain/value-object';

@CommandHandler(CreateOrganizationCommand)
export class CreateOrganizationCommandHandler
  implements ICommandHandler<CreateOrganizationCommand>
{
  constructor(
    private readonly repository: OrganizationRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateOrganizationCommand) {
    const exists = await this.repository.exists(command.name);

    if (exists) throw new Error('Organization already exists');

    const domainOrganization = this.publisher.mergeObjectContext(
      Organization.create(
        new OrganizationId(Uuid.generate()),
        new OrganizationName(command.name),
      ),
    );

    await this.repository.insert(domainOrganization);

    domainOrganization.commit();
  }
}
