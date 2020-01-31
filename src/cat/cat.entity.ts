import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("cat")
export class CatEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 500, unique: true })
  name: string;

  @Column("varchar", { length: 500 })
  type: string;

  @Column("numeric") pokedex: number;
}
