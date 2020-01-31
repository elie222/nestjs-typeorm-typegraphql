import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CatEntity } from "./cat.entity";
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatService } from "./cat.service";
import { inputCat } from "./inputs/cat.input";

@Resolver(of => CatEntity)
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Query(() => [CreateCatDto])
  async cats() {
    return this.catService.getCats();
  }

  @Mutation(() => CreateCatDto)
  async createCat(@Args("data") data: inputCat) {
    return this.catService.createCat(data);
  }
}
