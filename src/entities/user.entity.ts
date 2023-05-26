import { Exclude } from "class-transformer";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

import { Contacts } from "./contacts.entity";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column("text", { array: true })
    telefones: string[];

    @Column()
    @Exclude()
    password: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ default: false })
    isAdmin: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Contacts, (contacts) => contacts.user, {eager: true})
    contacts: Contacts[];
}
