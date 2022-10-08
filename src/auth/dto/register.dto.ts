import {
  IsEmail,
  IsOptional,
  MinLength,
  MaxLength,
  Length,
} from 'class-validator';
import {
  USER_FULLNAME_LENGTH,
  USER_USERNAME_LENGTH,
} from 'src/users/constants';
export class RegisterDto {
  @IsEmail()
  email: string;

  @MinLength(5)
  password: string;

  @Length(5, USER_USERNAME_LENGTH)
  userName: string;

  @IsOptional()
  @MaxLength(USER_FULLNAME_LENGTH)
  fullName: string;
}
