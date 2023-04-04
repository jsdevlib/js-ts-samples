import { HttpStatus, Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models';
import { UserDto } from './dtos';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async checkPassword(password: string, passwordDB: string): Promise<boolean> {
    return await bcrypt.compare(password, passwordDB);
  }

  async findByUsername(username: string) {
    return await this.repository.findOneBy({ username });
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async create(userDTO: UserDto): Promise<User> {
    const hash = await this.hashPassword(userDTO.password);

    const newUser = new User();
    newUser.name = userDTO.name;
    newUser.username = userDTO.username;
    newUser.password = hash;
    newUser.email = userDTO.email;

    await this.repository.insert(newUser);

    return newUser;
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.repository.findOneBy({ id });
  }

  async update(id: string, userDTO: UserDto): Promise<User> {
    const hash = await this.hashPassword(userDTO.password);

    const user = new User();
    user.name = userDTO.name;
    user.username = userDTO.username;
    user.password = hash;
    user.email = userDTO.email;

    await this.repository.save(user);

    return user;
  }

  async delete(id: string) {
    await this.repository.delete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
