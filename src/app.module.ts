import { Module } from "@nestjs/common";
import { CardsModule } from "./cards/cards.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { Card } from "./cards/models/card.model";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    CardsModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db",
      entities: [Card],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
