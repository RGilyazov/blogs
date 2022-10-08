import { IsNotEmpty, MaxLength } from 'class-validator';
import { USER_USERNAME_LENGTH } from 'src/users/constants';

export class LoginDto {
  @IsNotEmpty()
  password: string;

  @MaxLength(USER_USERNAME_LENGTH)
  @IsNotEmpty()
  userName: string;
}
