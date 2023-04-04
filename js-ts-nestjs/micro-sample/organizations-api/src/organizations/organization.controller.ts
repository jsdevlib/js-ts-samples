import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Result, Criteria } from 'src/shared/models';

import { CreateOrganizationDto, OrganizationInfoDto } from './application/dtos';
import { OrganizationMessages } from '../shared/constants';
import { OrganizationService } from './organization.service';

@Controller('api/v1/organizations')
export class OrganizationController {
  constructor(private readonly service: OrganizationService) {}

  @MessagePattern(OrganizationMessages.FIND_ALL)
  async getAll(@Payload() criteria: Criteria): Promise<OrganizationInfoDto[]> {
    return await this.service.getAll(criteria);
  }

  @MessagePattern(OrganizationMessages.FIND_ONE)
  async getById(@Payload() id: string): Promise<OrganizationInfoDto> {
    return await this.service.getById(id);
  }

  @MessagePattern(OrganizationMessages.CREATE)
  async create(@Payload() createOrganizationDto: CreateOrganizationDto) {
    return await this.service.add(createOrganizationDto);
  }

  @MessagePattern(OrganizationMessages.UPDATE)
  async block(@Payload() id: string): Promise<Result> {
    return await this.service.block(id);
  }

  @MessagePattern(OrganizationMessages.DELETE)
  async delete(@Payload() id: string): Promise<Result> {
    return await this.service.delete(id);
  }
}
