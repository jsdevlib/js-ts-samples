import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Organization } from 'src/organizations/domain';
import { OrganizationRepository } from 'src/organizations/infrastructure/database';
import { OrganizationInfoDto } from '../dtos';
import { GetOrganizationCriteriaQuery } from './get-all.query';

@QueryHandler(GetOrganizationCriteriaQuery)
export class GetOrganizationCriteriaQueryHandler
  implements IQueryHandler<GetOrganizationCriteriaQuery>
{
  constructor(
    private readonly repository: OrganizationRepository,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async execute(query: GetOrganizationCriteriaQuery) {
    const domainData = await this.repository.getAll(query);

    return await this.mapper.mapArrayAsync(
      domainData,
      Organization,
      OrganizationInfoDto,
    );
  }
}
