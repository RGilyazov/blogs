import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Blog } from './blog.entity';
import { DEFAULT_SORT_FIELD, POST_PER_PAGE } from './constants';
import { CreateBlogDto } from './dto/createBlog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog)
    private blogModel: typeof Blog,
  ) {
    blogModel.sync();
  }

  async getByIdForEdit(id: number, userId: number) {
    const blogModel = await this.blogModel.findByPk(id);
    if (!blogModel || blogModel.userId !== userId)
      throw new ForbiddenException('Access to resources denied');
    return blogModel;
  }

  async deleteById(id: number, userId: number) {
    const blogModel = await this.getByIdForEdit(id, userId);
    await this.blogModel.destroy({ where: { id } });
    return blogModel;
  }

  async query(
    start: number,
    sortingField = DEFAULT_SORT_FIELD,
    desc = false,
    userId?: number,
  ) {
    const res = await this.blogModel.findAll({
      offset: start | 0,
      limit: POST_PER_PAGE,
      order: [[sortingField, desc ? 'DESC' : 'ASC']],
      where: userId ? { userId } : {},
    });
    return res;
  }

  async updateById(id: number, blog: CreateBlogDto, userId: number) {
    const blogModel = await this.getByIdForEdit(id, userId);
    blogModel.content = blog.content;
    blogModel.title = blog.title;
    await blogModel.save();
    return blogModel;
  }

  async create(blog: CreateBlogDto, userId: number): Promise<Blog> {
    const createdBlog = await this.blogModel.create(
      { ...blog, userId: userId },
      {
        returning: true,
      },
    );
    return createdBlog;
  }
}
