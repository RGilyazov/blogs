import { BLOG_SORTING_FIELDS } from '../constants';
import { Transform, Type } from 'class-transformer';

import { IsInt, IsBoolean, IsEnum, IsOptional } from 'class-validator';

export class GetBlogsQueryDto {
  @IsOptional()
  @IsEnum(BLOG_SORTING_FIELDS)
  sort: BLOG_SORTING_FIELDS;

  @IsOptional()
  @Transform((params) => params.value === 'true')
  @IsBoolean()
  desc: boolean;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  start: number;
}
