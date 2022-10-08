import { IsNotEmpty, MaxLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  password: string;

  @MaxLength(50)
  @IsNotEmpty()
  userName: string;
}
