import { Controller, Get, Param, Query } from '@nestjs/common';
import { DEFAULT_SORT_FIELD } from 'src/blogs/constants';
import { BlogService } from './../blogs/blogs.service';
import { GetBlogsQueryDto } from '../blogs/dto/getBlogsQuery.dto';

@Controller('users')
export class UsersController {
  constructor(private blogService: BlogService) {}

  @Get(':userId/posts')
  create(@Param('userId') userId: number, @Query() query: GetBlogsQueryDto) {
    return this.blogService.query(
      query.start || 0,
      query.sort || DEFAULT_SORT_FIELD,
      query.desc,
      userId,
    );
  }
}
