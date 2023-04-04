import { UserDTO } from './dto/user.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import { Repository } from 'typeorm';
import { User } from './models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
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

  async create(userDTO: UserDTO): Promise<User> {
    const hash = await this.hashPassword(userDTO.password);

    const id = uuidv4();

    const newUser = { id, ...userDTO, password: hash } as User;

    return await this.repository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.repository.findOneBy({ id });
  }

  async update(id: string, userDTO: UserDTO): Promise<User> {
    const hash = await this.hashPassword(userDTO.password);

    console.log(userDTO);

    const user = { ...userDTO, id, password: hash } as User;

    return await this.repository.save(user);
  }

  async delete(id: string) {
    await this.repository.delete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
