import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { classes } from '@automapper/classes';

import { OrganizationModule } from './organizations/organization.module';
import { SharedModule } from './shared/shared.module';
import { Organization } from './organizations/infrastructure/database/tables/organization.table';
import { OrganizationProfile } from './organizations/application/mappings';
import { AutomapperModule } from '@automapper/nestjs';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'beyondnet.challenge',
      password: '123456',
      database: 'challengedb',
      entities: [Organization],
      synchronize: true,
      autoLoadEntities: true,
    }),
    SharedModule,
    OrganizationModule,
  ],
  controllers: [],
  providers: [OrganizationProfile],
})
export class AppModule {}
