import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/shared/proxies/proxy.module';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';

@Module({
  imports: [ProxyModule],
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
})
export class OrganizationsModule {}
