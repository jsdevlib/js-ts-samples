import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { UserMessages } from 'src/shared/constants';

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(UserMessages.CREATE)
  create(@Payload() userDTO: UserDTO) {
    return this.userService.create(userDTO);
  }

  @MessagePattern(UserMessages.FIND_ALL)
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern(UserMessages.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.userService.findOne(id);
  }

  @MessagePattern(UserMessages.UPDATE)
  update(@Payload() payload: any) {
    const data = payload.userDto;

    console.log(data);

    return this.userService.update(payload.id, data);
  }

  @MessagePattern(UserMessages.DELETE)
  delete(@Payload() id: string) {
    return this.userService.delete(id);
  }

  @MessagePattern(UserMessages.VALID_USER)
  async validateUser(@Payload() payload: any): Promise<any> {
    const user = await this.userService.findByUsername(payload.username);

    const isValidPassword = await this.userService.checkPassword(
      payload.password,
      user.password,
    );

    if (user && isValidPassword) return user;

    return null;
  }
}
