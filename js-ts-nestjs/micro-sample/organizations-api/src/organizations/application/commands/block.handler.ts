import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { OrganizationRepository } from 'src/organizations/infrastructure/database';
import { BlockOrganizationCommand } from './block.command';

@CommandHandler(BlockOrganizationCommand)
export class BlockOrganizationCommandHandler
  implements ICommandHandler<BlockOrganizationCommand>
{
  constructor(
    private readonly repository: OrganizationRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: BlockOrganizationCommand) {
    const organizationMerged = this.publisher.mergeObjectContext(
      await this.repository.getById(command.id),
    );

    await this.repository.block(command.id);

    organizationMerged.commit();
  }
}
