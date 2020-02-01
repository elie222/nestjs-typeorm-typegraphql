import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { Cat } from "./cat.entity";
import { CatService } from "./cat.service";
import { CreateCatInput } from "./inputs/cat.input";

@Resolver(of => Cat)
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Query(() => [Cat])
  async cats() {
    return this.catService.getCats();
  }

  @Mutation(() => Cat)
  async createCat(@Args("data") data: CreateCatInput) {
    return this.catService.createCat(data);
  }
}
