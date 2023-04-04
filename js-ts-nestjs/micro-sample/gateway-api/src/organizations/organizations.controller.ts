import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { OrganizationMessages } from 'src/shared/constants';
import { IOrganization } from 'src/shared/interfaces';
import { ClientProxyApp } from 'src/shared/proxies/client.proxy';
import { OrganizationDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Organizations')
@UseGuards(JwtAuthGuard)
@Controller('api/v1/organizations')
export class OrganizationsController {
  constructor(private readonly clientProxy: ClientProxyApp) {}

  private clientProxyOrganization = this.clientProxy.clientProxyOrganizations();

  @Get()
  async findAll(): Promise<Observable<IOrganization[]>> {
    return this.clientProxyOrganization.send(OrganizationMessages.FIND_ALL, {});
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Observable<IOrganization>> {
    return this.clientProxyOrganization.send(OrganizationMessages.FIND_ONE, id);
  }

  @Post()
  async create(
    @Body() organizationDto: OrganizationDto,
  ): Promise<Observable<IOrganization>> {
    return this.clientProxyOrganization.send(
      OrganizationMessages.CREATE,
      organizationDto,
    );
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() organizationDto: OrganizationDto,
  ): Promise<Observable<IOrganization>> {
    return this.clientProxyOrganization.send(OrganizationMessages.UPDATE, {
      id,
      organizationDto,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Observable<void>> {
    return this.clientProxyOrganization.send(OrganizationMessages.CREATE, id);
  }

  @Post(':organizationId/tribes/:tribeId')
  async addTribe(
    @Param('organizationId') organizationId: string,
    @Param('tribeId') tribeId: string,
  ) {
    // const tribe = await this.clientProxyTribes.send(
    //   TribesMessages.FIND_ONE,
    //   tribeId,
    // );
    // if (!tribe)
    //   throw new HttpException('Tribe not found', HttpStatus.NOT_FOUND);
    // return this.clientProxyOrganization.send(OrganizationMessages.ADD_TRIBE, {
    //   organizationId,
    //   tribeId,
    // });
  }
}
