import { Repository } from "typeorm";

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Cat } from "./cat.entity";
import { CreateCatInput } from "./inputs/cat.input";

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private readonly CatRepository: Repository<Cat>
  ) {}

  async createCat(data: CreateCatInput): Promise<Cat> {
    let cat = new Cat();
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
