
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ObjectEntity } from "./object.entity";
import { UserEntity } from "./user.entity";

@Entity('auctions_objects')
export class AuctionObjectEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    priceStart: string;
    @Column()
    dateEnd: Date;

    @Column()
    phone: number;
    @Column()
    address: string;
    @Column()
    country: string;

    @ManyToOne(() => ObjectEntity, object => object.auctionsObjects)
    object: ObjectEntity;

    @ManyToOne(() => UserEntity, user => user.auctionsObjects)
    user: UserEntity;;

    //id_user


}