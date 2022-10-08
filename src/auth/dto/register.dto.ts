import {
  IsEmail,
  IsOptional,
  MinLength,
  MaxLength,
  Length,
} from 'class-validator';
export class RegisterDto {
  @IsEmail()
  email: string;

  @MinLength(5)
  password: string;

  @Length(5, 50)
  userName: string;

  @IsOptional()
  @MaxLength(100)
  fullName: string;
}
