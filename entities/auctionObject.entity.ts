
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ObjectEntity } from "./object.entity";
import { UserEntity } from "./user.entity";

@Entity('auctions_objects')
export class AuctionObjectEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    action_price: string;
    @Column()
    auction_date: Date;

    @ManyToOne(() => ObjectEntity, object => object.auctionsObjects)
    object: ObjectEntity;

    @ManyToOne(() => UserEntity, user => user.auctionsObjects)
    user: UserEntity;;

    //id_user


}