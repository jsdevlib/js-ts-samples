import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { OrganizationRepository } from 'src/organizations/infrastructure/database';

import { DeleteOrganizationCommand } from './delete.command';

@CommandHandler(DeleteOrganizationCommand)
export class DeleteOrganizationCommandHandler
  implements ICommandHandler<DeleteOrganizationCommand>
{
  constructor(
    private readonly repository: OrganizationRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DeleteOrganizationCommand) {
    const organizationMerged = this.publisher.mergeObjectContext(
      await this.repository.getById(command.id),
    );

    await this.repository.delete(command.id);

    organizationMerged.commit();
  }
}
