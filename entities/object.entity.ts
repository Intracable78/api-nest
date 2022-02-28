import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(() => UserEntity, user => user.objects)
    user: UserEntity;
    @ManyToOne(() => CategoryEntity, category => category.objects)
    category: CategoryEntity;

    @ManyToOne(() => StateEntity, state => state.objects)
    state: StateEntity;

    @OneToMany(() => AuctionObjectEntity, auctionObject => auctionObject.object)

    auctionObjects: AuctionObjectEntity[];


}