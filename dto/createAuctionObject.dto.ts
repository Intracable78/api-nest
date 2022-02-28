import { IsDate, IsNotEmpty, IsNumber, IsNumberString } from "class-validator";
import { ObjectEntity } from "entities/object.entity";
import { UserEntity } from "entities/user.entity";

export class CreateAuctionObjectDto {

    @IsNumberString()
    @IsNotEmpty()
    objectId: number;

    @IsNumberString()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    auction_price: number;

    @IsDate()
    @IsNotEmpty()
    auction_date: Date;
}

