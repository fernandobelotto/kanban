import { IsEnum, IsString, IsNotEmpty } from "class-validator";
import { Lists } from "../enums/list.enum";

export class CreateCardDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  content: string;
  @IsNotEmpty()
  @IsString()
  @IsEnum(Lists)
  list: string;
}
