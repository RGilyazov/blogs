import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.entity';
import { BlogsModule } from 'src/blogs/blogs.module';
import { UsersController } from './users.controller';

@Module({
  imports: [SequelizeModule.forFeature([User]), BlogsModule],
  providers: [UsersService],
  exports: [UsersService, SequelizeModule],
  controllers: [UsersController],
})
export class UsersModule {}
