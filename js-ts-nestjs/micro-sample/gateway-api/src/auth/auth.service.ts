import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserMessages } from 'src/shared/constants';
import { ClientProxyApp } from 'src/shared/proxies/client.proxy';
import { UserDTO } from '../../../users-api/src/users/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly clientProxy: ClientProxyApp,
    private readonly jwtService: JwtService,
  ) {}

  private clientProxyUsers = this.clientProxy.clientProxyUsers();

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.clientProxyUsers.send(UserMessages.VALID_USER, {
      username,
      password,
    });

    if (user) return user;

    return null;
  }

  async signIn(user: any) {
    const payload = {
      username: user.username,
      sub: user._id,
    };

    return { access_token: this.jwtService.sign(payload) };
  }

  async signUp(userDTO: UserDTO) {
    return await this.clientProxyUsers
      .send(UserMessages.CREATE, userDTO)
      .toPromise();
  }
}
