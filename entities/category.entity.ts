import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ObjectEntity } from "./object.entity";

@Entity('categories')
export class CategoryEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => ObjectEntity, objects => objects.category)
    objects: ObjectEntity[]

}