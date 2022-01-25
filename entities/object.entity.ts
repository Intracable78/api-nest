import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AuctionObjectEntity } from "./auctionObject.entity";
import { CategoryEntity } from "./category.entity";
import { StateEntity } from "./state.entity";
import { UserEntity } from "./user.entity";

@Entity('objects')
export class ObjectEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    priceStart: number;
    @Column()
    dateEnd: Date;

    @Column()
    phone: number;
    @Column()
    address: string;
    @Column()
    country: string;

    @ManyToOne(() => UserEntity, user => user.objects)
    user: UserEntity;
    @ManyToOne(() => CategoryEntity, category => category.objects)
    category: CategoryEntity;

    @ManyToOne(() => StateEntity, state => state.objects)
    state: StateEntity;

    @OneToMany(() => AuctionObjectEntity, auctionsObjects => auctionsObjects.object)
    auctionsObjects: AuctionObjectEntity[]

}