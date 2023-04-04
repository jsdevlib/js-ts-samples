import { Module } from '@nestjs/common';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { SharedModule } from './shared/shared.module';
import { OrganizationModule } from './organizations/organization.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { Organization } from './organizations/infrastructure';
import { User } from './users/models';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env.development'] }),
    //TODO: Why cannot use process.env with TypeOrm
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'beyondnet.challenge',
      password: '123456',
      database: 'challengedb',
      entities: [Organization, User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    AuthModule,
    UsersModule,
    SharedModule,
    OrganizationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
