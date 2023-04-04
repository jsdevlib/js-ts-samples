import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { UserMessages } from 'src/shared/constants';
import { IUser } from 'src/shared/interfaces';
import { ClientProxyApp } from 'src/shared/proxies/client.proxy';
import { UserDTO } from './dtos/users.dto';

@ApiTags('Users')
@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly clientProxy: ClientProxyApp) {}

  private clienteProxyUser = this.clientProxy.clientProxyUsers();

  @Get()
  async findAll(): Promise<Observable<IUser[]>> {
    return this.clienteProxyUser.send(UserMessages.FIND_ALL, {});
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Observable<IUser>> {
    return this.clienteProxyUser.send(UserMessages.FIND_ONE, id);
  }

  @Post()
  async create(@Body() userDto: UserDTO): Promise<Observable<IUser>> {
    return this.clienteProxyUser.send(UserMessages.CREATE, userDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() userDto: UserDTO,
  ): Promise<Observable<IUser>> {
    return this.clienteProxyUser.send(UserMessages.UPDATE, { id, userDto });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Observable<void>> {
    return this.clienteProxyUser.send(UserMessages.CREATE, id);
  }
}
