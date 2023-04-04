import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  OrganizationCommandHandlers,
  OrganizationQueryHandlers,
} from './application';
import { OrganizationProfile } from './application/mappings';

import { OrganizationSagas } from './application/sagas/organization.saga';
import { OrganizationDomainEventHandlers } from './domain/events';
import {
  Organization,
  OrganizationRepository,
} from './infrastructure/database';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Organization])],
  controllers: [OrganizationController],
  providers: [
    OrganizationProfile,
    OrganizationService,
    OrganizationRepository,
    ...OrganizationCommandHandlers,
    ...OrganizationDomainEventHandlers,
    ...OrganizationQueryHandlers,
    OrganizationSagas,
  ],
})
export class OrganizationModule {}
