import { Module } from "@nestjs/common";
import { CatService } from "./cat.service";
import { CatResolver } from "./cat.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cat } from "./cat.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  providers: [CatService, CatResolver]
})
export class CatModule {}
