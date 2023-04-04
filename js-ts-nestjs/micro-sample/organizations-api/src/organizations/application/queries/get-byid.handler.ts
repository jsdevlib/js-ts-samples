import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Organization } from 'src/organizations/domain';
import { OrganizationRepository } from 'src/organizations/infrastructure/database';

import { OrganizationInfoDto } from '../dtos';
import { GetOrganizationByIdQuery } from './get-byid.query';

@QueryHandler(GetOrganizationByIdQuery)
export class GetOrganizationQueryByIdHandler
  implements IQueryHandler<GetOrganizationByIdQuery>
{
  constructor(
    private readonly repository: OrganizationRepository,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async execute(query: GetOrganizationByIdQuery) {
    const tableData = await this.repository.getById(query.id);

    return await this.mapper.mapAsync(
      tableData,
      Organization,
      OrganizationInfoDto,
    );
  }
}
