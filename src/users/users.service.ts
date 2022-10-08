import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UniqueConstraintError } from 'sequelize';
import { User, UserCreationAttributes } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  findByName(userName: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        userName,
      },
    });
  }

  async create(user: UserCreationAttributes): Promise<User> {
    console.log('user.service.create', user);
    try {
      const createdUser = await this.userModel.create(user);
      return createdUser;
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        throw new ForbiddenException(
          'Credentials taken. ' + error.errors[0].message,
        );
      }
      throw error;
    }
  }
  // async remove(id: string): Promise<void> {
  //   const user = await this.findOne(id);
  //   await user.destroy();
  // }
  // async findAll(): Promise<User[]> {
  //   return this.userModel.findAll();
  // }
}
