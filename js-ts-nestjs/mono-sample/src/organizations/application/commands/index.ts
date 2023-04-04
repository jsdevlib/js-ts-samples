export { CreateOrganizationCommand } from './create.command';
export { BlockOrganizationCommand } from './block.command';
export { DeleteOrganizationCommand } from './delete.command';

import { CreateOrganizationCommandHandler } from './create.handler';
import { BlockOrganizationCommandHandler } from './block.handler';
import { DeleteOrganizationCommandHandler } from './delete.handler';

export const OrganizationCommandHandlers = [
  CreateOrganizationCommandHandler,
  BlockOrganizationCommandHandler,
  DeleteOrganizationCommandHandler,
];
