import { Controller, Get, Param, Query } from '@nestjs/common';
import { BlogService } from './../blogs/blogs.service';

@Controller('users')
export class UsersController {
  constructor(private blogService: BlogService) {}

  @Get(':userId/posts')
  create(
    @Param('userId') userId: number,
    @Query('start') start: number,
    @Query('sort') sortingField: string,
    @Query('desc') desc: boolean,
  ) {
    return this.blogService.query(
      start || 0,
      sortingField || 'createdAt',
      desc,
      userId,
    );
  }
}
