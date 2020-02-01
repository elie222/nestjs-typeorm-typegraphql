import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
@Entity("cat")
export class Cat {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column("varchar", { length: 500, unique: true })
  name: string;

  @Field()
  @Column("varchar", { length: 500 })
  type: string;

  @Field(type => Int)
  @Column("numeric")
  pokedex: number;
}
