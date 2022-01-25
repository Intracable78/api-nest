import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ObjectEntity } from "./object.entity";

@Entity('states')
export class StateEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    @OneToMany(() => ObjectEntity, objects => objects.state)

    objects: ObjectEntity[]

}