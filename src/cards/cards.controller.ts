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
import { ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { CardsService } from "./cards.service";
import { CreateCardDto } from "./dto/create-card.dto";
import { UpdateCardDto } from "./dto/update-card.dto";
import { Card } from "./entities/card.entity";

@ApiTags("cards")
@Controller("cards")
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  /**
   * Creates a single card
   */
  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardsService.create(createCardDto);
  }

  /**
   * Retrieves all the cards
   */
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<Card[]> {
    return this.cardsService.findAll();
  }

  /**
   * Update the value of a card using the card id
   */
  @ApiOkResponse({
    description: "Retrieved card by ID successfully",
    type: Card,
  })
  @ApiNotFoundResponse({ description: "No card found for ID" })
  @ApiInternalServerErrorResponse({
    description: "Internal server error",
  })
  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  update(@Param("id") id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardsService.update(id, updateCardDto);
  }

  /**
   * Delete a card using the card id
   */
  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string) {
    return this.cardsService.remove(id);
  }
}
