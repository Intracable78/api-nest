import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AuctionObjectEntity } from "./auctionObject.entity";
import { ObjectEntity } from "./object.entity";
import { ObjectSoldEntity } from "./objectSold.entity";
import { RankEntity } from "./rank.entity";
//import * as bcrypt from 'bcrypt';

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: string;
    //@Column()
    //firebaseId: string;

    @Column({ unique: true })
    email: string;
    @BeforeInsert() async hashPassword() {
        this.password = this.password;
    }

    @Column()
    name: string;

    @Column()
    lastName: string;
    @Column()
    birthDate: string;

    @Column()
    phone: string;
    @Column()
    address: string;
    @Column()
    country: string;
    @CreateDateColumn()
    created_at: Date;
    // @Column()
    //token: string;
    @Column()
    password: string;

    @ManyToOne(() => RankEntity, rank => rank.users)
    rank: RankEntity;

    @OneToMany(() => ObjectEntity, objects => objects.user)
    objects: ObjectEntity[];
    @OneToMany(() => ObjectSoldEntity, objectsSolds => objectsSolds.user)
    objectsSolds: ObjectSoldEntity[];
    @OneToMany(() => AuctionObjectEntity, auctionObject => auctionObject.user)

    auctionsObjects: AuctionObjectEntity[]



}