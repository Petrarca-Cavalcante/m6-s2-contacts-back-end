import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./user.entity";


@Entity("contacts")
export class Contacts {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @Column()
  name: string;

  @Column("text", { array: true })
  emails: string[];

  @Column("text", { array: true })
  telefones: string[];

  @ManyToOne(() => User, (user) => user.contacts, { onDelete: "CASCADE" })
  user: User;

  @CreateDateColumn()
  createdAt: Date;
}
