import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCardDto } from "./dto/create-card.dto";
import { UpdateCardDto } from "./dto/update-card.dto";
import { Card } from "./models/card.model";

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>
  ) {}

  create(createCardDto: CreateCardDto) {
    return this.cardRepository.save(createCardDto);
  }

  update(id: string, updateCardDto: UpdateCardDto) {
    return this.cardRepository.update({ id }, updateCardDto);
  }

  async findAll(): Promise<Card[]> {
    return this.cardRepository.find();
  }

  async remove(id: string) {
    const response = await this.cardRepository.findOne({ id });
    this.cardRepository.delete({ id });
    return response;
  }
}
