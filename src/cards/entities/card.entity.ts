import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsString, IsNotEmpty } from "class-validator";
import { Lists } from "../enums/list.enum";

export class Card {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  content: string;
  @IsNotEmpty()
  @IsString()
  @IsEnum(Lists)
  @ApiProperty()
  list: string;
}
