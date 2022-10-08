import { Module } from '@nestjs/common';
import { BlogService } from './blogs.service';
import { BlogController } from './blogs.controller';
import { Blog } from './blog.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Blog])],
  providers: [BlogService],
  exports: [BlogService],
  controllers: [BlogController],
})
export class BlogsModule {}
