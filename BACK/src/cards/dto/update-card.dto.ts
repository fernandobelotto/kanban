import { PartialType } from "@nestjs/mapped-types";
import { CreateCardDto } from "./create-card.dto";
import { IsUUID, IsNotEmpty } from "class-validator";

export class UpdateCardDto extends PartialType(CreateCardDto) {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
