import { IsNotEmpty, IsString } from "class-validator";

export class LoginRequestDto {
  @IsNotEmpty()
  @IsString()
  login: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}