import { Module } from "@nestjs/common";
import { CatService } from "./cat.service";
import { CatResolver } from "./cat.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatEntity } from "./cat.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CatEntity])],
  providers: [CatService, CatResolver]
})
export class CatModule {}
