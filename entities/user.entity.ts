import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AuctionObjectEntity } from "./auctionObject.entity";
import { ObjectEntity } from "./object.entity";
import { ObjectSoldEntity } from "./objectSold.entity";
import { RankEntity } from "./rank.entity";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    name: string;

    @Column()
    lastName: string;
    @Column()
    birthDate: string;

    @Column()
    phone: number;
    @Column()
    address: string;
    @Column()
    country: string;
    @ManyToOne(() => RankEntity, rank => rank.users)
    rank: RankEntity;

    @OneToMany(() => ObjectEntity, objects => objects.user)
    objects: ObjectEntity[];
    @OneToMany(() => ObjectSoldEntity, objectsSolds => objectsSolds.user)
    objectsSolds: ObjectSoldEntity[];
    @OneToMany(() => AuctionObjectEntity, auctionObject => auctionObject.user)

    auctionsObjects: AuctionObjectEntity[]



}