import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CardsService } from "./cards.service";
import { CreateCardDto } from "./dto/create-card.dto";
import { UpdateCardDto } from "./dto/update-card.dto";

@Controller("cards")
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardsService.create(createCardDto);
  }

  @Get()
  findAll() {
    return this.cardsService.findAll();
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCardDto: UpdateCardDto) {
    this.cardsService.update(id, updateCardDto);
    return updateCardDto;
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.cardsService.remove(id);
  }
}
