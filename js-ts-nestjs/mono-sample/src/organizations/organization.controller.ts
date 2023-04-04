import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Query,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Result, Criteria } from 'src/shared/models';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto, OrganizationInfoDto } from './application/dtos';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Organizations')
@Controller('api/v1/organizations')
export class OrganizationController {
  constructor(private readonly service: OrganizationService) {}

  @Get()
  async getAll(@Query() criteria: Criteria): Promise<OrganizationInfoDto[]> {
    return await this.service.getAll(criteria);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<OrganizationInfoDto> {
    return await this.service.getById(id);
  }

  @Post()
  @ApiOperation({ summary: 'create a new organization' })
  async create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return await this.service.add(createOrganizationDto);
  }

  @Put(':id')
  async block(@Param('id') id: string): Promise<Result> {
    return await this.service.block(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Result> {
    return await this.service.delete(id);
  }
}
