import { Field, InputType } from "type-graphql";

@InputType()
export class CreateCatInput {
  @Field() readonly name: string;
  @Field() readonly type: string;
  @Field() readonly pokedex: number;
}
