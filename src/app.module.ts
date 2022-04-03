import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CardsModule } from "./cards/cards.module";
import { Card } from "./cards/models/card.model";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    CardsModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db",
      entities: [Card],
      synchronize: true,
    }),
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
