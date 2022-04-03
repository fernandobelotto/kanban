import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { CardsService } from "./cards.service";
import { CreateCardDto } from "./dto/create-card.dto";
import { UpdateCardDto } from "./dto/update-card.dto";

@Controller("cards")
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardsService.create(createCardDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.cardsService.findAll();
  }

  @Patch(":id")
  // @UseGuards(JwtAuthGuard)
  update(@Param("id") id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardsService.update(id, updateCardDto);
  }

  @Delete(":id")
  // @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string) {
    return this.cardsService.remove(id);
  }
}
