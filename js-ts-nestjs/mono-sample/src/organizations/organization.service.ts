import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { Criteria, Result } from 'src/shared/models';
import {
  CreateOrganizationCommand,
  DeleteOrganizationCommand,
  BlockOrganizationCommand,
} from './application/commands';
import { CreateOrganizationDto, OrganizationInfoDto } from './application/dtos';
import {
  GetOrganizationByIdQuery,
  GetOrganizationCriteriaQuery,
} from './application/queries';

@Injectable()
export class OrganizationService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async getAll(criteria: Criteria): Promise<OrganizationInfoDto[]> {
    return await this.queryBus.execute(
      new GetOrganizationCriteriaQuery(criteria),
    );
  }

  async getById(id: string): Promise<OrganizationInfoDto> {
    return await this.queryBus.execute(new GetOrganizationByIdQuery(id));
  }

  async add(organization: CreateOrganizationDto) {
    return await this.commandBus.execute(
      new CreateOrganizationCommand(organization.name),
    );
  }

  async block(id: string): Promise<Result> {
    return await this.commandBus.execute(new BlockOrganizationCommand(id));
  }

  async delete(id: string): Promise<Result> {
    return await this.commandBus.execute(new DeleteOrganizationCommand(id));
  }
}
