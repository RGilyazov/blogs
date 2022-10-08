import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(userName: string, pass: string): Promise<any> {
    const user = await this.usersService.findByName(userName);

    if (user) {
      const validPassword = await bcrypt.compare(pass, user.password);
      if (validPassword) {
        const result = { id: user.id, userName: user.userName };
        return result;
      }
    }
    return null;
  }

  async login(user: LoginDto) {
    const DBuser = await this.usersService.findByName(user.userName);
    return this.signToken(user.userName, DBuser.id);
  }

  async register(user: RegisterDto) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    const createdUser = await this.usersService.create({
      ...user,
      password: hash,
    });
    return this.signToken(createdUser.userName, createdUser.id);
  }

  async signToken(
    userName: string,
    userId: number,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      userName,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
