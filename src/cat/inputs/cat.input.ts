import { Field, InputType } from "type-graphql";

@InputType()
export class inputCat {
  @Field() readonly name: string;
  @Field() readonly type: string;
  @Field() readonly pokedex: number;
}
