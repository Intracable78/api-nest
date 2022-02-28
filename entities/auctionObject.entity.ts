import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ObjectEntity } from "./object.entity";
import { UserEntity } from "./user.entity";

@Entity('auctions_objects')
export class AuctionObjectEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    auction_price: number;
    @Column()
    auction_date: Date;

    @ManyToOne(() => ObjectEntity, object => object.auctionObjects)
    object: ObjectEntity;

    @ManyToOne(() => UserEntity, user => user.auctionsObjects)
    user: UserEntity;;


}