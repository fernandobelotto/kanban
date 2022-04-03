import { PartialType } from "@nestjs/mapped-types";
import { CreateCardDto } from "./create-card.dto";
import { IsUUID, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateCardDto extends PartialType(CreateCardDto) {
  @IsUUID()
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
