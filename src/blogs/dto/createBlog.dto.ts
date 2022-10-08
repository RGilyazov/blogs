import { MaxLength, IsNotEmpty } from 'class-validator';
export class CreateBlogDto {
  @MaxLength(50)
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;
}
