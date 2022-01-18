import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ObjectEntity } from "./object.entity";
import { UserEntity } from "./user.entity";

@Entity('objects_solds')
export class ObjectSoldEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    amount: number;

    @Column()
    priceStart: string;

    //id_object
    @ManyToOne(() => UserEntity, user => user.objectsSolds)
    user: UserEntity;

    @OneToOne(() => ObjectEntity)
    @JoinColumn()
    object: ObjectEntity;

}