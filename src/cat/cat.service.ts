import { Injectable } from "@nestjs/common";
import { CatEntity } from "./cat.entity";
import { CreateCatDto } from "./dto/create-cat.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(CatEntity)
    private readonly CatRepository: Repository<CatEntity>
  ) {}

  async createCat(data: CreateCatDto): Promise<CatEntity> {
    let cat = new CatEntity();
    cat.name = data.name;
    cat.pokedex = data.pokedex;
    cat.type = data.type;

    await this.CatRepository.save(cat);

    return cat;
  }

  async getCats() {
    return await this.CatRepository.find();
  }
}
