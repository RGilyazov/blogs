import { IsEmail, IsOptional, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(5)
  password: string;

  @MinLength(5)
  userName: string;

  @IsOptional()
  fullName: string;
}
