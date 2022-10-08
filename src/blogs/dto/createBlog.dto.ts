import { MinLength, Length } from 'class-validator';
export class CreateBlogDto {
  @Length(1, 50)
  title: string;

  @MinLength(1)
  content: string;
}
