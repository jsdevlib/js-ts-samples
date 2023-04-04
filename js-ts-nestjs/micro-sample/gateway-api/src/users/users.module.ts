import { Module } from '@nestjs/common';

import { ProxyModule } from 'src/shared/proxies/proxy.module';
import { UsersController } from './users.controller';

@Module({
  imports: [ProxyModule],
  controllers: [UsersController],
  providers: [],
})
export class UsersModule {}
