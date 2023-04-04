import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/users/dtos/users.dto';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('Authentication')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Req() req) {
    return await this.authService.signIn(req.user);
  }

  @Post('signup')
  async signUp(@Body() userDTO: UserDto) {
    return await this.authService.signUp(userDTO);
  }
}
