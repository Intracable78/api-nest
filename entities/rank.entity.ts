import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('ranks')
export class RankEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    @OneToMany(() => UserEntity, user => user.rank)
    users: UserEntity[]

}