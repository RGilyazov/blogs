import { MaxLength, IsNotEmpty } from 'class-validator';
import { BLOG_TITLE_LENGTH } from '../constants';
export class CreateBlogDto {
  @MaxLength(BLOG_TITLE_LENGTH)
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;
}
