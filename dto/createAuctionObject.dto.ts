import { IsDate, IsNotEmpty, IsNumber, IsNumberString } from "class-validator";
import { ObjectEntity } from "../entities/object.entity";
import { UserEntity } from "../entities/user.entity";

export class CreateAuctionObjectDto {


    @IsNotEmpty()
    object: ObjectEntity;


    @IsNotEmpty()
    user: UserEntity;

    @IsNumber()
    @IsNotEmpty()
    auction_price: number;

    @IsDate()
    @IsNotEmpty()
    auction_date: Date;

}

